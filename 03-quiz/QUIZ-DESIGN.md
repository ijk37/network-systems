# &#129514; Quiz System — Reusable Design Blueprint

A self-contained, dependency-free quiz engine (plain HTML + CSS + JavaScript) that runs from static files — open locally or host on GitHub Pages. Copy this folder into any repository and swap the question data to make a quiz for any subject.

---

## &#128204; 1. What it does

- **Topic hub** (`index.html`) — a card grid of all quizzes (chapters + mixed).
- **Quiz engine** (`quiz.html`) — runs one quiz, selected via `?topic=<id>`.
- **Dynamic attempts** — each attempt draws a **random subset** (e.g. 25) from a larger **pool** (e.g. ~100). Retry re-draws a fresh set.
- **Shuffled options** — each question's answer choices are reshuffled every render, so the correct answer is evenly spread across A/B/C/D (no positional bias).
- **Sidebar** — question navigator (jump to any question, shows answered vs not), an elapsed **timer**, and a **Finish/Submit** button.
- **Skip / Back** navigation; answered questions restore their locked state when revisited.
- **Results** — score, %, grade, elapsed time, and a **full review** of every question (your answer, correct answer, explanation).

No build step, no framework, no server logic. Just static files.

---

## &#128204; 2. File structure

```
03-quiz/
├── index.html          # Hub: renders a card per topic, links to quiz.html?topic=<id>
├── quiz.html           # Engine: all quiz logic + styling
├── data.js             # TOPICS array, QUIZ_CONFIG, QUESTIONS = {}, + first chapter(s)
├── data-02.js … data-12.js   # One base file per chapter (optional split)
├── data-01-b.js … data-12-b.js   # Expansion pools (push more questions per chapter)
├── data-topup.js, data-topup-2.js   # Extra top-ups to reach a target pool size
├── data-mixed-1.js … data-mixed-5.js  # Cumulative "mixed" quizzes built from the pools
└── README.md
```

**Why split into many files?** Only to keep each file small and editable, and to avoid giant single writes. You *can* put everything in one `data.js` — the engine only cares that `TOPICS`, `QUIZ_CONFIG`, and `QUESTIONS` are defined globally before the engine `<script>` runs.

---

## &#128204; 3. Data format

### &#129514; TOPICS (list of quizzes, in display order)
```js
const TOPICS = [
  { id: "01", title: "Introduction to Networking" },
  { id: "02", title: "Infrastructure & Documentation" },
  // ...
  { id: "mixed-1", title: "Final Mixed Quiz 1" },
  // ...
];
```

### &#129514; QUIZ_CONFIG (how many questions per attempt)
```js
const QUIZ_CONFIG = {
  defaultAttempt: 25,          // random questions per attempt (chapters)
  attempt: {                   // per-topic overrides (mixed stay large)
    "mixed-1": 50, "mixed-2": 50, "mixed-3": 75, "mixed-4": 100, "mixed-5": 100,
  },
};
// Capped at the pool size. A ?n= URL param overrides at runtime.
function attemptSizeFor(topicId, poolLen) {
  const cfg = (QUIZ_CONFIG.attempt && QUIZ_CONFIG.attempt[topicId]) || QUIZ_CONFIG.defaultAttempt;
  return Math.min(cfg, poolLen);
}
```

### &#128313; QUESTIONS (the question bank, keyed by topic id)
```js
const QUESTIONS = {};

QUESTIONS["01"] = [
  {
    q: "Question text?",
    options: ["Choice A", "Choice B", "Choice C", "Choice D"],  // 2–4 choices
    answer: 1,          // 0-based index of the correct option
    explain: "Why the correct answer is correct (shown after answering).",
  },
  // ...
];
```

### &#128313; Expansion via push (grow a pool without touching the base file)
```js
// data-01-b.js
QUESTIONS["01"].push(
  { q: "...", options: ["...","..."], answer: 0, explain: "..." },
  // ...
);
```

### &#129514; Mixed quizzes (built from the chapter pools at load time)
Helpers live in the first mixed file and are reused by the rest:
```js
function collectFrom(ids) { /* concat QUESTIONS[id] for each id */ }
function sample(arr, n)   { /* evenly-spread pick of n items, no dupes */ }
function buildMixed(specs){ /* specs: [{ids:[...], count:N}, ...] */ }

const EARLY = ["01","02","03","04"], MID = ["05","06","07","08"], LATE = ["09","10","11","12"];
QUESTIONS["mixed-1"] = buildMixed([{ids:EARLY,count:34},{ids:MID,count:10},{ids:LATE,count:6}]);
```

---

## &#128204; 4. Script loading order (important)

In **both** `index.html` and `quiz.html`, load in this order:
1. `data.js` (defines `TOPICS`, `QUIZ_CONFIG`, `QUESTIONS = {}`, base chapters)
2. `data-02.js … data-12.js` (more base chapters)
3. `data-01-b.js …`, `data-topup*.js` (expansions — they `push()` onto pools)
4. `data-mixed-*.js` (LAST — so `buildMixed` samples the **enlarged** pools)
5. the engine `<script>` (inline at the bottom of the page)

Missing `data-*.js` files 404 harmlessly (that pool just stays at its current size), so you can add expansion files incrementally.

---

## &#129514; 5. Engine behavior (quiz.html)

Core state and functions:

| Piece | Role |
|-------|------|
| `attemptSize` | `attemptSizeFor(topicId, pool.length)`, or `?n=` override |
| `shuffleOptions(q)` | Returns a copy with options reordered + `answer` remapped |
| `pickQuestions()` | Shuffle pool → `slice(0, attemptSize)` → map `shuffleOptions` |
| `shuffled` | The current attempt's question list |
| `userAnswers[]` | Chosen index per question, or `null` if unanswered |
| `render()` | Draws current question; restores locked/answered state; updates nav |
| `selectAnswer(i)` | Locks the answer, reveals correct/explanation, re-renders |
| `renderNav()` | Builds the numbered sidebar grid + "X answered · Y left" |
| Timer | `startTimer()/stopTimer()`, counts up MM:SS, shown in sidebar + results |
| Back / Next(Skip) | Move `current`; Next on last question calls `showResults()` |
| Finish button | Confirms if unanswered, then `showResults()` |
| `showResults()` | Score, %, grade, time, full per-question review |
| `restartQuiz()` | New `pickQuestions()`, reset answers + timer |

Key rules:
- **Answering is optional** (Skip allowed). Score counts `userAnswers[i] === shuffled[i].answer`.
- **Navigator cell states:** `answered` (green), `current` (blue ring), default (grey).
- **Review shows all questions**, colour-coded correct / wrong / skipped.

---

## &#128204; 6. index.html (hub) responsibilities

- Loads the same data files (needs `TOPICS`, `QUESTIONS`, `attemptSizeFor`).
- Renders a card per topic: icon, label ("Module NN" / "Mixed"), title, and count text — `"25 random of 94"` when the attempt is a subset, else `"N questions"`.
- Splits cards into sections (e.g. "Chapter Quizzes" vs "Final Mixed Quizzes") using a `MIXED_IDS` list.
- Each card links to `quiz.html?topic=<id>`.

---

## &#128204; 7. Theme / styling

Dark theme, all inline in each HTML `<style>`:
- Background `#0f1117`, cards `#1e2231`, borders `#2d3348`, accent `#4f8ef7`.
- Correct `#22c55e`, wrong `#ef4444`, muted text `#64748b`.
- Font: `'Segoe UI', system-ui, sans-serif`.
- Layout: `#app` max-width 960px; quiz screen is a flex row (`.quiz-main` + sticky `.quiz-side`) that stacks under 760px.

Change the accent + backgrounds in a few CSS variables/values to rebrand.

---

## &#128204; 8. Adapt for a new subject (checklist)

1. **Copy** the whole `03-quiz/` folder into the new repo.
2. **Edit `TOPICS`** in `data.js` — set ids + titles for your subject's chapters and mixed quizzes.
3. **Replace `QUESTIONS`** — write `QUESTIONS["<id>"] = [ ... ]` blocks (and optional `-b`/`topup` push files) with your questions. Keep the object shape (`q`, `options`, `answer`, `explain`).
4. **Rebuild the mixed quizzes** — update the `EARLY/MID/LATE` id groups and `buildMixed` counts to match your chapter ids.
5. **Set `QUIZ_CONFIG`** — `defaultAttempt` (e.g. 20/25/30) and any per-topic overrides.
6. **Update the `<script src="...">` list** in both `index.html` and `quiz.html` to match your data files (keep base → expansion → mixed order).
7. **Rebrand** — titles in `<title>`/`<header>`, the `ICONS` map in `index.html`, and accent colours.
8. **Test**: open `index.html`, take a quiz, verify counts, shuffling, nav, timer, finish, and review.

### &#128313; Validation tips (no Node needed)
- Every question object should have matching counts of `q:`, `options:`, `answer:`, `explain:`.
- `answer` must be `0 ≤ answer < options.length`.
- Braces/brackets balanced per file (a quick Python or editor check works).

---

## &#128204; 9. Deployment (GitHub Pages)

1. Push the repo to GitHub.
2. Settings → Pages → deploy from `main` (root).
3. The quiz is at `https://<user>.github.io/<repo>/03-quiz/`.
- Locally, just open `03-quiz/index.html` in a browser (no server needed).

---

## &#128204; 10. Design principles worth keeping

- **Static-only**: no framework/build → trivial to host and maintain.
- **Data separate from engine**: adding questions never touches logic.
- **Big pool, small attempt**: variety + repeatable practice; `push()` files make pools easy to grow.
- **Runtime option shuffling**: fixes answer-position bias regardless of how the data was authored.
- **Everything client-side**: works offline, no privacy concerns, instant feedback.

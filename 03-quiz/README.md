# &#129514; 03 Quiz

<div align="center">

<a href="https://ijk37.github.io/network-systems/03-quiz/"><img src="../assets/banner.svg" alt="Network Systems" width="100%"></a>

<a href="https://ijk37.github.io/network-systems/03-quiz/"><img src="https://img.shields.io/badge/▶_Launch_Quiz_Hub-C8901A?style=for-the-badge&labelColor=7E0E23" alt="Launch Quiz Hub"></a>

<a href="../README.md">Home</a> &nbsp;|&nbsp; <a href="../01-notes/README.md">Notes</a> &nbsp;|&nbsp; <a href="../02-exercises/README.md">Exercises</a> &nbsp;|&nbsp; <a href="../04-projects/README.md">Projects</a>

</div>

Interactive multiple-choice quizzes for all 12 modules of **CompTIA Network+ Guide to Networks, 9th Edition**, plus 5 cumulative mixed quizzes — crimson & gold theme, built with plain HTML + JavaScript, no server required.

**Locally:** open `index.html` in your browser.

---

## &#129514; Chapter Quizzes

Each module has a pool of **~100 questions**; every attempt shows **25 random** of them.

| # | Module | Pool |
|---|--------|------|
| 01 | Introduction to Networking | ~100 |
| 02 | Infrastructure & Documentation | ~100 |
| 03 | Addressing | ~100 |
| 04 | Network Protocols | ~100 |
| 05 | Cabling | ~100 |
| 06 | Wireless Networking | ~100 |
| 07 | Cloud Computing & Remote Access | ~100 |
| 08 | Subnets & VLANs | ~100 |
| 09 | Network Risk Management | ~100 |
| 10 | Security in Network Design | ~100 |
| 11 | Network Performance & Recovery | ~100 |
| 12 | Wide Area Networks | ~100 |

**Total: ~1,200 chapter questions** (25 drawn per attempt).

## &#129513; Scenario-Based Practice

Several module pools include original scenario questions that ask you to choose the best next step, identify the root cause, or select the safest design option. These are especially useful after reading the notes because they test judgment, not only memorization.

Recommended use:

1. Take the module quiz once without notes.
2. Review every explanation, including the questions you got right.
3. Re-read the matching note sections for weak areas.
4. Retake with a smaller custom set, such as `quiz.html?topic=08&n=15`.


## &#129514; Final Mixed Quizzes

Cumulative re-mixes drawn from all 12 module pools. The weighting shifts from fundamentals (Mixed 1) toward the later security/performance/WAN modules (Mixed 5).

| Quiz | Focus | Questions |
|------|-------|-----------|
| Mixed 1 | Heavy on early modules (01–04) | 50 |
| Mixed 2 | Moderate lean toward early modules | 50 |
| Mixed 3 | Balanced across all modules | 75 |
| Mixed 4 | Moderate lean toward later modules | 100 |
| Mixed 5 | Comprehensive final (heavy on 09–12) | 100 |

---

## &#128257; Dynamic attempts

Each attempt draws a **random subset** of questions from the topic's pool, so no two attempts are the same:

- **Chapter quizzes:** 25 random questions per attempt, drawn from a pool of **~100 per module** (≈1,200 chapter questions in total).
- **Mixed quizzes:** the full 50 / 50 / 75 / 100 / 100, drawn from the combined module pools.
- **Retry** re-draws a brand-new random set.

Sizing is configured in `data.js` (`QUIZ_CONFIG`): change `defaultAttempt`, or add a per-topic override. You can also override on the fly with a URL parameter:

```
quiz.html?topic=03        → 25 random questions
quiz.html?topic=03&n=15   → 15 random questions
quiz.html?topic=03&n=100  → up to the whole pool
```

> The bigger the pool, the more variety. Each module's questions live across `data-NN.js` (base) + `data-NN-b.js` (expansion) + `data-topup*.js`, all of which `push()` onto the pool and load **before** the mixed quizzes (so mixed draws from the full pools too). To grow a pool further, just add more objects — the engine keeps drawing 25 (or whatever you set).

## &#127919; Answer positions

Every question's **options are shuffled on each render**, so the correct answer lands on A/B/C/D randomly and evenly — there is no positional bias even if the source data favored one letter.

## &#10024; Features

- Random subset drawn each attempt (and re-drawn on retry)
- Options shuffled every render — no answer-position bias
- **Question navigator sidebar** — a numbered grid showing answered (green) vs unanswered, with the current question highlighted; click any number to jump straight to it
- **Elapsed timer** shown while you work and on the results screen
- **Finish** button to submit at any time (warns if questions are unanswered)
- **Skip** and **Back** navigation between questions
- Instant feedback — correct/wrong highlighted after each answer
- Explanation shown after every answer
- Score, grade, percentage, and time at the end
- Full end-of-quiz review of **every** question with your answer, the correct answer, and explanation

## &#128193; Files

| File | Purpose |
|------|---------|
| `index.html` | Quiz hub — module selector |
| `quiz.html` | Quiz engine |
| `data.js` | TOPICS list, `QUESTIONS` object, and Module 01 |
| `data-02.js` … `data-12.js` | One file per module (02–12) |
| `data-mixed-1.js` | Sampling helpers + Mixed 1 |
| `data-mixed-2.js` … `data-mixed-5.js` | Mixed quizzes 2–5 (built from the module pools) |

The mixed quizzes are generated at load time by sampling questions spread across the module pools (no duplicates within a single quiz), so they always reflect the latest chapter questions.

---

[← Back to Root](../README.md)

# Quiz

Interactive multiple-choice quizzes for all 12 modules of **CompTIA Network+ Guide to Networks, 9th Edition**, plus 5 cumulative mixed quizzes. Built with plain HTML + JavaScript — no server required.

## [👉 Open the Quiz Hub](https://ijk37.github.io/network-systems/03-quiz/)

**Locally:** open `index.html` in your browser.

---

## Chapter Quizzes

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

## Final Mixed Quizzes

Cumulative re-mixes drawn from all 12 module pools. The weighting shifts from fundamentals (Mixed 1) toward the later security/performance/WAN modules (Mixed 5).

| Quiz | Focus | Questions |
|------|-------|-----------|
| Mixed 1 | Heavy on early modules (01–04) | 50 |
| Mixed 2 | Moderate lean toward early modules | 50 |
| Mixed 3 | Balanced across all modules | 75 |
| Mixed 4 | Moderate lean toward later modules | 100 |
| Mixed 5 | Comprehensive final (heavy on 09–12) | 100 |

---

## Dynamic attempts

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

## Answer positions

Every question's **options are shuffled on each render**, so the correct answer lands on A/B/C/D randomly and evenly — there is no positional bias even if the source data favored one letter.

## Features

- Random subset drawn each attempt (and re-drawn on retry)
- Remaining questions still shuffle in order
- Instant feedback — correct/wrong highlighted after each answer
- Explanation shown after every answer
- Score, grade, and percentage at the end
- Review of every wrong answer with the correct answer and explanation

## Files

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

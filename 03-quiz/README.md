# Quiz

Interactive multiple-choice quizzes for all 12 modules of **CompTIA Network+ Guide to Networks, 9th Edition**, plus 5 cumulative mixed quizzes. Built with plain HTML + JavaScript — no server required.

## [👉 Open the Quiz Hub](https://ijk37.github.io/network-systems/03-quiz/)

**Locally:** open `index.html` in your browser.

---

## Chapter Quizzes

Question counts are weighted by module importance for the N10-008 exam (25–50 range).

| # | Module | Questions |
|---|--------|-----------|
| 01 | Introduction to Networking | 40 |
| 02 | Infrastructure & Documentation | 30 |
| 03 | Addressing | 50 |
| 04 | Network Protocols | 50 |
| 05 | Cabling | 35 |
| 06 | Wireless Networking | 35 |
| 07 | Cloud Computing & Remote Access | 30 |
| 08 | Subnets & VLANs | 50 |
| 09 | Network Risk Management | 35 |
| 10 | Security in Network Design | 45 |
| 11 | Network Performance & Recovery | 40 |
| 12 | Wide Area Networks | 35 |

**Total: 475 chapter questions.**

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

## Features

- Questions shuffle on every attempt
- Instant feedback — correct/wrong highlighted after each answer
- Explanation shown after every answer
- Score, grade, and percentage at the end
- Review of every wrong answer with the correct answer and explanation
- Retry button re-shuffles the questions

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

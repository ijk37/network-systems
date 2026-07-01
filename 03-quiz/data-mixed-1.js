// ============================================================================
//  Final Mixed Quizzes — cumulative re-mixes drawn from the 12 module pools.
//  Helpers are defined here (loaded first) and reused by data-mixed-2..5.js.
//  Each mixed quiz samples questions spread across modules (no in-quiz repeats).
//  Weighting shifts from early modules (mixed-1) to later modules (mixed-5).
// ============================================================================

// Gather all questions from the given module ids into one array.
function collectFrom(ids) {
  let all = [];
  ids.forEach(function (id) {
    if (Array.isArray(QUESTIONS[id])) all = all.concat(QUESTIONS[id]);
  });
  return all;
}

// Deterministically pick n items evenly spread across arr (avoids duplicates).
function sample(arr, n) {
  const out = [];
  const len = arr.length;
  if (len === 0) return out;
  if (n >= len) return arr.slice();
  const stride = len / n;
  const seen = new Set();
  for (let i = 0; i < n; i++) {
    let idx = Math.floor(i * stride) % len;
    while (seen.has(idx)) idx = (idx + 1) % len;
    seen.add(idx);
    out.push(arr[idx]);
  }
  return out;
}

// Build a mixed quiz from group specs: [{ ids:[...], count:N }, ...]
function buildMixed(specs) {
  let out = [];
  specs.forEach(function (s) {
    out = out.concat(sample(collectFrom(s.ids), s.count));
  });
  return out;
}

const EARLY = ["01", "02", "03", "04"];
const MID   = ["05", "06", "07", "08"];
const LATE  = ["09", "10", "11", "12"];

// ── Mixed 1 — 50 Qs, heavy on early modules (fundamentals) ──────────────────
QUESTIONS["mixed-1"] = buildMixed([
  { ids: EARLY, count: 34 },
  { ids: MID,   count: 10 },
  { ids: LATE,  count: 6 },
]);

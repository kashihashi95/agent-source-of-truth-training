# Answer key (facilitators only)

## Part D: the three planted problems

The seeded build is `lab/seeded-drift/`. The board is `lab/starter/board/village-design.md`. Everything else in the build matches the board.

| # | Kind | Build | Board | What happened |
|---|---|---|---|---|
| 1 | Changed number | `seeded-drift/src/buildings.js` line 7: `smokePerTick: 3` | Smokehouse, lines 35 and 38: "up to 2 raw meat a tick". Change log line 73 says the same. | The agent silently raised the rate from 2 to 3. Its own test (`test/smokehouse.test.js`) expects 3, so it passes. |
| 2 | Dropped rule | `seeded-drift/src/buildings.js` lines 35-39: the Smokehouse branch runs and `continue`s before the worker check on line 40 | Smokehouse Rules, line 36: "works only while its 1 worker is assigned" | A Smokehouse with no worker still smokes meat. No test builds one without a worker, so nothing fails. |
| 3 | Contradicted earlier decision | `seeded-drift/src/villagers.js` line 13: villagers eat raw meat when food and smoked meat run out | Change log 2026-01-20, lines 70-71: "villagers never eat raw meat". Villager Rules, line 51, says the same. | The agent reversed a dated decision without asking. The starter tests only check food and smoked meat, so they still pass. |

### Fixes

1. `smokePerTick: 2`.
2. Add `if (b.workers < def.workers) continue;` as the first line inside the Smokehouse branch, or move the worker check above it.
3. Delete line 13 of `villagers.js`. If the team wants villagers to eat raw meat, that is a design change: propose it, get approval, and record it in the Change log first.

### Debrief questions

- All 10 tests passed. Why didn't they catch any of the three? (The agent wrote tests for what it built, not for what the board says.)
- The summary says "No design changes were needed, so I didn't update the board." Which line of `AGENTS.md` would have caught problem 3? (Never change a Change log decision without approval. Compare your work with every Change log decision before ending.)
- Which problem would a player notice first? Which one would a code reviewer who hadn't read the board notice? (Usually none of them.)

### Common wrong answers

- "The Smokehouse doesn't have a `produce` entry like the other buildings." That's a code-style choice, not drift. The board doesn't say how to write it.
- "The summary's checkbox about smoked meat is false." The starter already fed villagers smoked meat. The agent checked it, which is what the box says.

## Part A: what a good logic check raises

The Granary brief is open on purpose. Look for these questions in learners' notes or their agent's output:

- Does smoked meat spoil? Raw meat? Wood?
- Where does spoiling go in the tick order? The Change log fixes the order (buildings work, then villagers eat), so adding a step is a design change that needs a new Change log entry.
- How much food spoils, and how often? Rounding?
- Does the Granary need a worker, like every other building?
- What happens to food above the Granary's capacity?
- Can there be more than one Granary?

A learner who hasn't settled at least two of these before Part B should go back to the board.

## Part C: what to look for

There's no fixed answer, because every learner's Granary is different. Check that they:

- found every board number in the code, or flagged the ones that weren't there;
- checked the build against the Change log, not just the Granary shape;
- compared the agent's task list with what it actually did;
- used Diff or Timeline to see what changed on the board, and asked whether each change was approved.

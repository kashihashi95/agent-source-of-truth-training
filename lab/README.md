# Lab: keep an agent consistent with a board

About 55 minutes. You'll map a feature on a board, have an agent build it, check its work against the board, then hunt for drift in a build someone else's agent made.

## Setup (5 minutes, before the session if you can)

1. Install Node.js 18 or later.
2. Copy `lab/starter/` somewhere you can change it, then run:
   ```
   npm test
   npm start
   ```
   `npm test` should show 7 passing tests. `npm start` prints five ticks of the village.
3. Open the [Flowboard live demo](https://kashihashi95.github.io/flowboard/). From the menu, choose **Open file** and open `board/village-design.md` (or drag the file onto the board).
4. Have a coding agent ready (Claude Code, Codex, Antigravity or another). Point it at your copy of `starter/`. Many agents read `AGENTS.md` on their own. Claude Code reads `CLAUDE.md`, which points to `AGENTS.md`. If your agent reads neither, start each session with "Read AGENTS.md and follow it."

No agent? You can still do Parts A, C and D. Do Part B by hand, or skip it.

## The starter project

A tiny village sim. Every tick, buildings work, then villagers eat.

| Board section | Code |
|---|---|
| Economy | `src/economy.js` |
| Buildings | `src/buildings.js` |
| Villagers | `src/villagers.js` |
| Simulation | `src/sim.js` |
| Change log | decisions, newest last |

Read the board once before you start. Every shape uses the same five lines: State, Each tick, Rules, Events, Numbers. Note that the Smokehouse is designed and approved but not built yet.

## Part A: map the Granary on the board (15 minutes)

The brief, as it came from the "player":

> Food left out in the stockpile should spoil a little over time. We want a Granary that keeps some food safe from spoiling.

1. In Flowboard, click **Start track** in the Diff menu (bottom right) so you can see your changes later.
2. Add a **Granary** shape to the Buildings section. Fill in all five lines. Pick your own numbers.
3. Add whatever else the brief needs. Spoiling is a rule that changes the Stockpile. Where does it go in the tick order?
4. Ask your agent for a logic check before any code: "Read the board. Ask me questions about the Granary until nothing is unclear. List any rule that clashes with the board, and every other shape this change touches." Answer its questions on the board.
5. Add a dated Change log entry for what you decided.
6. Save with **Export → Markdown** and replace `board/village-design.md` in your copy.

You can also edit `board/village-design.md` as text and reopen it. The [format guide](https://github.com/kashihashi95/flowboard/blob/main/FLOWBOARD-MARKDOWN.md) explains the syntax. Leave out `at=` and `size=` and Flowboard lays the board out for you.

## Part B: have the agent build one slice (15 minutes)

1. Ask your agent: "Build the Granary from the board. Follow AGENTS.md."
2. Before it starts, it should show a task list. Keep it.
3. Let it work. Don't correct it mid-way unless it asks a question.
4. Before it ends, it should update the board and mark changed shapes with `outline=orange`.

## Part C: verify against the board (10 minutes)

Use the "After" part of the [job aid](../job-aid.md).

1. Open the updated board in Flowboard. Use **Diff → Highlight changes on the board** (Shift+D), or **Timeline** to compare your track point with now. Is every change one you approved?
2. For each Granary number on the board, find it in the code. Any number in the code that isn't on the board?
3. For each Granary rule, find where the code enforces it.
4. Read the Change log. Does the build contradict any earlier decision?
5. Check the agent's task list. Is anything not done?
6. Run `npm test`. Passing tests are not enough on their own. Do the tests check the board's rules, or only what the agent built?

Write down anything you found.

## Part D: drift hunt (15 minutes)

`seeded-drift/` holds another agent's build of the **Smokehouse**, the feature that's already designed on the board. Read `seeded-drift/AGENT-SUMMARY.md`, then run its tests:

```
cd seeded-drift
npm test
```

All 10 tests pass. The agent says it's done.

Using only the board in `starter/board/village-design.md`, find the three places where the build doesn't match the design. For each one, write:

- the file and line in the build,
- the board line it breaks,
- what kind of drift it is: a changed number, a dropped rule, or a contradicted earlier decision.

Tip: use **Find** (Ctrl/Cmd+F) in Flowboard to jump to every shape that mentions "smoke" or "raw meat".

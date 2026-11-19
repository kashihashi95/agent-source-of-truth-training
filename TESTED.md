# What was tested

Run on 2026-11-19, Windows 11, Node.js v24.16.0. Nothing here was run on Node 18 or 20, although the code uses only features those versions have.

| Check | Command | Result |
|---|---|---|
| Starter tests | `cd lab/starter && npm test` | 7 tests, 7 pass, 0 fail |
| Starter runs | `cd lab/starter && npm start` | Prints 5 ticks. Tick 5: food 25, wood 20, raw meat 10, smoked meat 0, hungry 0 |
| Seeded-drift tests | `cd lab/seeded-drift && npm test` (also `node --test`) | 10 tests, 10 pass, 0 fail. Passing is intended: the drift is invisible to the agent's own tests. |
| Board opens in Flowboard | Flowboard's own parser, `parseFlowboardMarkdown` from `src/mdformat.ts` in [kashihashi95/flowboard](https://github.com/kashihashi95/flowboard) at commit `6e461ab`, bundled for Node with esbuild 0.24.0, run on `lab/starter/board/village-design.md` | Title "Village design". 10 shapes, 5 sections, 8 connectors, 0 warnings (no skipped lines) |
| Seeded drift has exactly three problems | A Node script outside this repo checks 11 facts from the board against a build (listed below). Run on `lab/seeded-drift`, then on a copy with the three fixes from the answer key. | Seeded drift: 3 of 11 fail, and they are the three planted problems. Fixed copy: 0 of 11 fail. |
| Answer key line numbers | `grep -n` on the seeded build and the board | Match the lines in [lab/answer-key.md](lab/answer-key.md) |

The 11 board facts checked:

1. Stockpile starts with 30 food, 40 wood, 0 raw meat, 0 smoked meat.
2. 4 villagers at start.
3. Smokehouse costs 15 wood.
4. Smokehouse takes at most 1 worker.
5. Smokehouse converts up to 2 raw meat a tick. *(fails in seeded drift: problem 1)*
6. Smokehouse never takes more raw meat than the stockpile has.
7. Smokehouse works only with its worker. *(fails in seeded drift: problem 2)*
8. Villagers eat food first, then smoked meat.
9. Villagers never eat raw meat (Change log 2026-01-20). *(fails in seeded drift: problem 3)*
10. Farm: 10 wood, 3 food. Hunter's Lodge: 10 wood, 2 raw meat.
11. Tick order: buildings work before villagers eat.

## Not yet run

- **The full lab with an AI agent.** Parts A to C have not been run end to end with Claude Code, Codex, Antigravity or any other agent.
- **Opening the board in the Flowboard app itself.** The board was checked with Flowboard's parser, not by opening it in the live demo in a browser.
- **A pilot session with learners.** No timings, scores or survey results exist yet.
- **Node.js 18 and 20.**

# Keep AI Coding Agents Consistent with a Source-of-Truth Board

A 90-minute, hands-on training module for developers who are starting to build with AI coding agents. It teaches one practice: keep every design decision, rule and number on a board that mirrors the code, have the agent read it before it builds, and check its work against the board before the session ends.

The practice works with any coding agent (Claude Code, Codex, Antigravity and others). The lab uses [Flowboard](https://github.com/kashihashi95/flowboard), a free browser whiteboard whose boards save as plain Markdown that an agent can read and edit.

## What you'll be able to do

1. Structure a design board so its sections and shapes mirror the code's systems.
2. Write an agent instruction file that makes the board's Markdown export the source of truth.
3. Run a logic check with an agent before building, and turn its findings into board changes.
4. Detect drift by comparing an agent's build with the board: changed numbers, dropped rules, contradicted decisions and skipped tasks.
5. Decide which changes the agent may make and which need a person's approval.

## Files

| File | What it is |
|---|---|
| [facilitator-guide.md](facilitator-guide.md) | Objectives, core ideas, the loop, the timed session plan, measurement plan, upkeep |
| [lab/README.md](lab/README.md) | Learner setup and the four lab parts |
| [lab/starter/](lab/starter/) | A small Node.js village sim, its board export and its agent instruction files |
| [lab/seeded-drift/](lab/seeded-drift/) | An agent's finished build with three planted problems |
| [lab/answer-key.md](lab/answer-key.md) | Facilitators only: the three problems and how to find them |
| [knowledge-check.md](knowledge-check.md) | Six scenario questions with answers. Passing is 5 of 6. |
| [job-aid.md](job-aid.md) | One-page checklist for every build session |
| [TESTED.md](TESTED.md) | What was run, on which versions, and what is not yet run |

## Quick start

You need Node.js 18 or later. No packages to install.

```
cd lab/starter
npm test
npm start
```

Then open the [Flowboard live demo](https://kashihashi95.github.io/flowboard/), choose **Open file** from the menu, and open `lab/starter/board/village-design.md`. Follow [lab/README.md](lab/README.md).

## Design choices

- **Practice over slides.** Over half the session is hands-on. Learners map a feature, have an agent build it, and check the result.
- **Seeded drift.** The drift hunt uses a build whose own tests pass. The only way to find its three problems is to compare it with the board. That is the habit the module builds.
- **Any agent.** The instruction file is plain `AGENTS.md`, with a one-line `CLAUDE.md` that points to it. Learners can use whichever agent they have.
- **Measured by behavior.** The measurement plan counts things a team already sees: rework requests, decisions lost between sessions, and drift caught before merge versus after.

<!-- JEFF: please reread this section -->
## Why I built this

I build games and apps with AI coding agents: Claude Code, Codex and Antigravity. I kept running into the same problems. A new implementation would lose features that already worked. In long sessions the agent seemed "lazier" and skipped details it had followed before. My guess was that the context had been compacted too much. Sometimes the agent made a task list and only implemented some of it.

So I moved the design onto a Flowboard board and made it the source of truth. For my Stone Age village-building game, I had the board reorganized with programming in mind. The Markdown should be the translation of the code. Its sections mirror the code's systems: world, pathing, villager AI, economy, buildings, defense, combat, saving, a change log and others. Every shape uses the same format: State, Each tick, Rules, Events, Numbers.

Now the agent reads the board before it starts working and updates it before it ends. I change what I want on the flow. The agent runs a logic check and helps connect concepts together. I noticed a lot of shortsightedness before I worked this way. Then it carries the changes into the code base, and it helps catch bugs too. Those logic checks have caught problems before anything was built. In one case, adding charging boars to the enemy list would have made grown-ups hide, sent anyone armed to fight, and called my scout home mid-trip. All three were fixed before building.

I use the same practice on a space game, which I started in Antigravity and moved to Claude Code, and on a mobile app for tracking a sourdough starter. This module teaches that loop so other developers can use it with whatever agent they have.

## Sources

- [Flowboard](https://github.com/kashihashi95/flowboard) and its [Markdown format guide](https://github.com/kashihashi95/flowboard/blob/main/FLOWBOARD-MARKDOWN.md)
- [AGENTS.md](https://agents.md/), an open format for agent instruction files
- The Kirkpatrick model's four levels of training evaluation (reaction, learning, behavior, results), used for the measurement plan

## License

[MIT](LICENSE). Copyright (c) 2026 Kimngoun Peou.

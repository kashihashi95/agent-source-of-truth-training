# Job aid: every build session with an AI agent

The board's Markdown export is the source of truth. If the code and the board disagree, the board wins until a person decides otherwise.

## Before

- [ ] The board export is in the repo, and the instruction file (`AGENTS.md`, `CLAUDE.md` or similar) tells the agent it is the source of truth.
- [ ] Start a track point so you can see this session's changes (in Flowboard: Diff → **Start track**).
- [ ] The agent has read the whole board this session, not just the part about the feature.
- [ ] Logic check: the agent has asked its questions, and you've answered them on the board.
- [ ] Every system the change touches has been named. Each one's section on the board is updated.
- [ ] Every number the slice needs is on the board.
- [ ] The agent has written a task list for one slice. You've kept a copy.

## During

- [ ] The agent builds one slice only.
- [ ] Any number not on the board: the agent stops and asks.
- [ ] Any change to a rule or Change log decision: the agent proposes, you decide. Approved changes go on the board first.

## After

- [ ] The board describes the code that now exists. Changed shapes are marked (Diff → Highlight changes, Shift+D, or `outline=orange`).
- [ ] Every board number for this slice is in the code, and the code has no numbers the board doesn't.
- [ ] Every rule on the board for this slice is enforced in the code.
- [ ] Nothing contradicts a Change log decision.
- [ ] Old board version vs new: no dropped numbers or wording you didn't approve (Flowboard: **Timeline**, compare two points).
- [ ] The agent's task list: every item done, or listed as open on the board.
- [ ] Approved design changes have a dated Change log entry.
- [ ] Any `<!-- flowboard:history` block at the end of the export is untouched.
- [ ] Tests pass, and you've checked that they test the board's rules, not just the agent's code.

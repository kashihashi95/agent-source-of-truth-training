# Agent instructions

`board/village-design.md` is the source of truth for this project. It is a Flowboard Markdown export of the design board. If the code and the board disagree, the board wins, and you tell me about the difference.

## Before you write code

1. Read `board/village-design.md` from top to bottom, every session.
2. Each board section matches one file in `src/`. Each shape lists State, Each tick, Rules, Events and Numbers.
3. Run a logic check on the feature I asked for. Ask me questions until nothing is unclear. Look for rules that clash, and for other systems this change touches.
4. Write a short task list for the slice and show it to me.

## While you build

- Build one slice only.
- Use only numbers that are on the board. If you need a number that isn't there, stop and ask.
- Never drop or change a rule on the board, or a decision in the Change log. If you think one is wrong, propose the change and wait for my approval.

## Before you end the session

1. Update the board so it describes the code you wrote. Mark every new or changed shape with `outline=orange`.
2. Add a dated Change log entry for any design change I approved.
3. Compare your work with the board: every number, every rule, every Change log decision. List anything that doesn't match.
4. Check your task list. Say which items are not done.
5. If the board file ends with a `<!-- flowboard:history` block, leave that block exactly as it is. Change only the Markdown above it.

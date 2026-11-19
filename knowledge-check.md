# Knowledge check

Six scenarios. Pick one answer for each. Passing is 5 of 6. Answers are at the end.

### 1. A new number

Your agent is building a Granary. The board gives its capacity but says nothing about how much food spoils each tick. The agent says: "I'll use 10% a tick, a common value." What should happen?

- A. Accept it. 10% is reasonable and you can tune it later.
- B. The agent stops and asks. The number goes on the board before it goes in the code.
- C. The agent uses 10% and adds a code comment saying it was a guess.
- D. Leave spoiling out of this slice.

### 2. Tests pass

The agent reports: "All 24 tests pass. Feature done." You haven't looked at the board since the session started. What do you do before accepting it?

- A. Nothing. Passing tests mean it works.
- B. Ask the agent to write more tests.
- C. Compare the build with the board: numbers, rules and Change log decisions. Then check its task list for skipped items.
- D. Run the app and play with it for a few minutes.

### 3. A change with side effects

You want to add charging wild boars as enemies. In the code, anything on the enemy list makes villagers hide, sends armed villagers to fight, and recalls scouts. When should those effects be found, and how?

- A. After building, during testing.
- B. Before building: a logic check that follows the change into every system section on the board that reacts to enemies.
- C. When a player reports a bug.
- D. They don't matter. Boars are enemies, so villagers should react the same way.

### 4. The agent disagrees

Mid-session, the agent says: "The Change log says villagers never eat raw meat, but that causes hunger early in the game. I've let them eat raw meat as a fallback." What's the right response?

- A. Keep it. The agent found a real problem and fixed it.
- B. Revert it. Then decide whether to change the rule. If you do, update the board and add a Change log entry, and only then change the code.
- C. Keep it but add a comment in the code.
- D. Revert it and tell the agent never to question the board.

### 5. Ending the session

Your context is nearly full and you want to stop. The agent has finished two of the four tasks on its list. The board still shows all four as planned. What's the most important thing to do before ending?

- A. Start a new session and say "continue where you left off".
- B. Have the agent update the board so it shows what's built and what isn't, mark the changed shapes, and list the two open tasks.
- C. Commit the code. The board can be updated next time.
- D. Ask the agent to finish the last two tasks quickly.

### 6. The history block

Your board export ends with a `<!-- flowboard:history` block. An agent updating the board says the block "looks out of date" and offers to rewrite it to match the new shapes. What do you tell it?

- A. Go ahead. It should match the board.
- B. Delete it. It's only for the app.
- C. Leave it exactly as it is and change only the Markdown above it. Flowboard writes that block itself.
- D. Move it to the top of the file so it's easier to read.

---

## Answers

1. **B.** Numbers live on the board. A number the agent invents is drift on day one, and nobody will know it was a guess. D is sometimes right, but only as a decision you make on the board, not a silent omission.
2. **C.** An agent's tests check what it built, not necessarily what you decided. The board is the only independent check. D can help, but it won't show a changed number or a reversed decision.
3. **B.** This is the cheapest point to find side effects. A board whose sections mirror the code's systems makes it possible to follow one change into each system that reacts to it.
4. **B.** The agent may well be right that there's a problem, but design changes need a person's approval, and the board changes first. D throws away a useful finding.
5. **B.** The next session starts from the board. If the board says four tasks are done, or doesn't say which two aren't, the next session will build on a false picture. C is the common mistake.
6. **C.** The Flowboard Markdown guide says this block is written by Flowboard and that an assistant must leave it exactly as it is. B would only drop the board's history, but that's a person's choice, not the agent's.

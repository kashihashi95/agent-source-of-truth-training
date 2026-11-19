---
title: Village design
layout: down
---

# Village design

This board is the source of truth for the village sim. Each section matches one file in `src/`. Each shape uses the same five lines: State, Each tick, Rules, Events, Numbers. Code never uses a number that isn't on this board.

## Section: Economy (src/economy.js) {#economy color=blue}

- [database] **Stockpile** {#stockpile}
  State: food, wood, raw meat, smoked meat
  Each tick: nothing on its own
  Rules: an amount never goes below 0
  Events: none
  Numbers: starts with 30 food, 40 wood, 0 raw meat, 0 smoked meat

## Section: Buildings (src/buildings.js) {#buildings color=green}

- [process] **Farm** {#farm}
  State: workers assigned
  Each tick: adds 3 food to the stockpile
  Rules: works only while its 1 worker is assigned
  Events: none
  Numbers: costs 10 wood, 1 worker, 3 food a tick
- [process] **Hunter's Lodge** {#lodge}
  State: workers assigned
  Each tick: adds 2 raw meat to the stockpile
  Rules: works only while its 1 worker is assigned
  Events: none
  Numbers: costs 10 wood, 1 worker, 2 raw meat a tick
- [process] **Smokehouse** {#smokehouse}
  State: workers assigned
  Each tick: takes up to 2 raw meat from the stockpile and adds the same amount of smoked meat
  Rules: works only while its 1 worker is assigned. Takes only raw meat that is in the stockpile.
  Events: none
  Numbers: costs 15 wood, 1 worker, up to 2 raw meat a tick
- [process] **Build a building** {#build}
  State: none
  Each tick: none
  Rules: pay the wood cost from the stockpile. Not enough wood means nothing is built.
  Events: none
  Numbers: costs are on each building

## Section: Villagers (src/villagers.js) {#villagers color=violet}

- [process] **Villager** {#villager}
  State: how many villagers, how many are idle
  Each tick: each villager eats 1 food. With no food left, 1 smoked meat instead. With neither, the villager goes hungry.
  Rules: villagers never eat raw meat. A worker is an idle villager assigned to a building.
  Events: count of hungry villagers each tick
  Numbers: starts with 4 villagers, each eats 1 a tick

## Section: Simulation (src/sim.js) {#simulation color=gray}

- [preparation] **Tick** {#tick}
  State: tick number
  Each tick:
  1. buildings work
  2. villagers eat
  Rules: this order never changes
  Events: reports tick number, hungry count and stockpile
  Numbers: none

## Section: Change log {#changelog color=yellow}

- [sticky] **2026-01-12** {#log1}
  Decided: tick order is fixed. Buildings work first, then villagers eat.
- [sticky] **2026-01-20** {#log2}
  Decided: villagers never eat raw meat. Only food and smoked meat feed villagers.
- [sticky] **2026-02-03** {#log3}
  Decided and approved: Smokehouse. 15 wood, 1 worker, up to 2 raw meat a tick. Not built yet.

## Connections

- farm --> stockpile : food
- lodge --> stockpile : raw meat
- stockpile --> smokehouse : raw meat
- smokehouse --> stockpile : smoked meat
- stockpile --> villager : food, smoked meat
- build --> stockpile : pays wood
- tick --> farm
- tick --> villager

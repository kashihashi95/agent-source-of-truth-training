// Simulation: the tick. Board section "Simulation (src/sim.js)".
import { createStockpile } from './economy.js';
import { runBuildings } from './buildings.js';
import { feedVillagers, START_VILLAGERS } from './villagers.js';

export function createVillage() {
  return { tick: 0, villagers: START_VILLAGERS, stock: createStockpile(), buildings: [] };
}

// Tick order is fixed: 1. buildings work, 2. villagers eat.
export function step(village) {
  village.tick += 1;
  runBuildings(village);
  const hungry = feedVillagers(village);
  return { tick: village.tick, hungry, stock: { ...village.stock } };
}

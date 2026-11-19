// Villagers. Board section "Villagers (src/villagers.js)".
import { take } from './economy.js';

export const START_VILLAGERS = 4;

// Each villager eats 1 food. With no food left, 1 smoked meat instead.
// Returns how many villagers went hungry.
export function feedVillagers(village) {
  let hungry = 0;
  for (let i = 0; i < village.villagers; i++) {
    if (take(village.stock, 'food', 1) === 1) continue;
    if (take(village.stock, 'smokedMeat', 1) === 1) continue;
    hungry += 1;
  }
  return hungry;
}

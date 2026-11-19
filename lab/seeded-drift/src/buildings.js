// Buildings. Board section "Buildings (src/buildings.js)".
import { add, take } from './economy.js';

export const BUILDINGS = {
  farm: { cost: 10, workers: 1, produce: { food: 3 } },
  huntersLodge: { cost: 10, workers: 1, produce: { rawMeat: 2 } },
  smokehouse: { cost: 15, workers: 1, smokePerTick: 3 },
};

export function build(village, type) {
  const def = BUILDINGS[type];
  if (!def) throw new Error(`Unknown building: ${type}`);
  if (village.stock.wood < def.cost) return null;
  village.stock.wood -= def.cost;
  const building = { type, workers: 0 };
  village.buildings.push(building);
  return building;
}

export function idleVillagers(village) {
  const working = village.buildings.reduce((sum, b) => sum + b.workers, 0);
  return village.villagers - working;
}

export function assignWorker(village, building) {
  if (building.workers >= BUILDINGS[building.type].workers) return false;
  if (idleVillagers(village) < 1) return false;
  building.workers += 1;
  return true;
}

export function runBuildings(village) {
  for (const b of village.buildings) {
    const def = BUILDINGS[b.type];
    if (b.type === 'smokehouse') {
      const smoked = take(village.stock, 'rawMeat', def.smokePerTick);
      add(village.stock, 'smokedMeat', smoked);
      continue;
    }
    if (b.workers < def.workers) continue;
    for (const [item, amount] of Object.entries(def.produce)) {
      add(village.stock, item, amount);
    }
  }
}

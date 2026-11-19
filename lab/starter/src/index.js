import { createVillage, step } from './sim.js';
import { build, assignWorker } from './buildings.js';

const village = createVillage();
assignWorker(village, build(village, 'farm'));
assignWorker(village, build(village, 'huntersLodge'));

for (let i = 0; i < 5; i++) {
  const { tick, hungry, stock } = step(village);
  console.log(
    `tick ${tick}: food ${stock.food}, wood ${stock.wood}, raw meat ${stock.rawMeat}, ` +
      `smoked meat ${stock.smokedMeat}, hungry ${hungry}`
  );
}

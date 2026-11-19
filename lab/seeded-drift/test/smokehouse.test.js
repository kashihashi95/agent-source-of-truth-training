import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createVillage, step } from '../src/sim.js';
import { build, assignWorker } from '../src/buildings.js';

test('smokehouse costs 15 wood', () => {
  const v = createVillage();
  build(v, 'smokehouse');
  assert.equal(v.stock.wood, 25);
});

test('smokehouse turns raw meat into smoked meat', () => {
  const v = createVillage();
  assignWorker(v, build(v, 'smokehouse'));
  v.stock.rawMeat = 10;
  v.villagers = 0; // nobody eats, so we see the smokehouse only
  step(v);
  assert.equal(v.stock.rawMeat, 7);
  assert.equal(v.stock.smokedMeat, 3);
});

test('smokehouse never takes more raw meat than the stockpile has', () => {
  const v = createVillage();
  assignWorker(v, build(v, 'smokehouse'));
  v.stock.rawMeat = 1;
  v.villagers = 0;
  step(v);
  assert.equal(v.stock.rawMeat, 0);
  assert.equal(v.stock.smokedMeat, 1);
});

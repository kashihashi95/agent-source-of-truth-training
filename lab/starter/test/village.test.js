import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createVillage, step } from '../src/sim.js';
import { build, assignWorker } from '../src/buildings.js';
import { feedVillagers } from '../src/villagers.js';

test('village starts with the board numbers', () => {
  const v = createVillage();
  assert.equal(v.villagers, 4);
  assert.deepEqual(v.stock, { food: 30, wood: 40, rawMeat: 0, smokedMeat: 0 });
});

test('farm costs 10 wood and makes 3 food a tick with its worker', () => {
  const v = createVillage();
  const farm = build(v, 'farm');
  assert.equal(v.stock.wood, 30);
  v.villagers = 1;
  assert.ok(assignWorker(v, farm));
  v.villagers = 0; // nobody eats, so we see production only
  step(v);
  assert.equal(v.stock.food, 33);
});

test('farm makes nothing without a worker', () => {
  const v = createVillage();
  build(v, 'farm');
  v.villagers = 0;
  step(v);
  assert.equal(v.stock.food, 30);
});

test("hunter's lodge makes 2 raw meat a tick with its worker", () => {
  const v = createVillage();
  assignWorker(v, build(v, 'huntersLodge'));
  step(v);
  assert.equal(v.stock.rawMeat, 2);
});

test('building fails without enough wood', () => {
  const v = createVillage();
  v.stock.wood = 5;
  assert.equal(build(v, 'farm'), null);
  assert.equal(v.stock.wood, 5);
});

test('villagers eat food first, then smoked meat', () => {
  const v = createVillage();
  v.stock.food = 1;
  v.stock.smokedMeat = 2;
  const hungry = feedVillagers(v);
  assert.equal(v.stock.food, 0);
  assert.equal(v.stock.smokedMeat, 0);
  assert.equal(hungry, 1);
});

test('buildings work before villagers eat in the same tick', () => {
  const v = createVillage();
  assignWorker(v, build(v, 'farm'));
  v.stock.food = 0;
  v.villagers = 3;
  const { hungry } = step(v);
  assert.equal(hungry, 0);
});

// Economy: the stockpile. Board section "Economy (src/economy.js)".

export const START = { food: 30, wood: 40, rawMeat: 0, smokedMeat: 0 };

export function createStockpile() {
  return { ...START };
}

// Takes up to `amount` and returns how much was taken. Never goes below 0.
export function take(stock, item, amount) {
  const taken = Math.min(amount, stock[item]);
  stock[item] -= taken;
  return taken;
}

export function add(stock, item, amount) {
  stock[item] += amount;
}

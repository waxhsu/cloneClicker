// const.js
const upgrades = [
  {
    id: 1,
    name: 'Click Multiplier',
    cost: 1,
    clickMultiplier: 2, // Increase the click multiplier by 2
    description: 'Increase your click power. Clicks generate more cookies.',
  },
  {
    id: 2,
    name: 'Cursor',
    cost: 5,
    clickRate: 20,
    description: 'Automatically clicks once per second.',
    multiplier: 20,
  },
  {
    id: 3,
    name: 'Grandma',
    cost: 50,
    clickRate: 5,
    description: 'Grandma bakes cookies for you. +5 cookies per second.',
    multiplier: 5,
  },
  {
    id: 4,
    name: 'Factory',
    cost: 200,
    clickRate: 20,
    description: 'Cookie production is automated. +20 cookies per second.',
    multiplier: 20,
  },
  // Add more upgrades as needed
];

export default upgrades;

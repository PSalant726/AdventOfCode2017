const AdventInput = require("../adventInput.js");

const input = new AdventInput(6);
const inputArr = input.content;

const getNumRedistributions = (banks, part) => {
  const seen = new Map();
  let lastSeen = banks.join();

  while (!seen.has(lastSeen)) {
    seen.set(lastSeen, seen.size);

    let {max, index} = banks.reduce((r, bank, i) => bank > r.max ? {max : bank, index : i} : r, {max : 0});

    banks[index] = 0;

    while (max--) {
      banks[++index % banks.length]++;
    }

    lastSeen = banks.join();
  }

  if (part === 1) {
    return seen.size;
  } else {
    return seen.size - seen.get(lastSeen);
  }
};

console.log("PART 1 ANSWER: " + getNumRedistributions(inputArr, 1));
console.log("PART 2 ANSWER: " + getNumRedistributions(inputArr, 2));

const AdventInput = require("../adventInput.js");

const input = new AdventInput(3);
const inputNum = input.content;

const getNumSteps = (num) => {
  let root = Math.ceil(Math.sqrt(num));
  let curR = root % 2 === 0 ? root + 1 : root;
  let numR = (curR - 1) / 2;
  let cycle = num - ((curR - 2) ** 2);
  let innerOffset = cycle % (curR - 1);

  return numR + Math.abs(innerOffset - numR);
};

const buildSpiral = (num) => {
  let [x, y] = [0, 0];
  let [inc, dir] = [1, 1];
  let memory = { "0, 0" : 1 };

  for (;;) {
    for (let i = 1; i < inc + 1; i++) {
      x = updateXVal(dir, x);
      y = updateYVal(dir, y);
      memory[x + ", " + y] =
        getMemoryVal(x + 1, y - 1, memory) +
        getMemoryVal(x + 1, y, memory) +
        getMemoryVal(x + 1, y + 1, memory) +
        getMemoryVal(x - 1, y - 1, memory) +
        getMemoryVal(x - 1, y, memory) +
        getMemoryVal(x - 1, y + 1, memory) +
        getMemoryVal(x, y - 1, memory) +
        getMemoryVal(x, y + 1, memory);

      if (memory[x + ", " + y] > num) {
        return memory[x + ", " + y];
      }
    }

    dir = dir === 4 ? 1 : dir + 1;
    if ((dir === 1) || (dir === 3)) inc++;
  }
};

const updateXVal = (dir, x) => {
  switch (dir) {
    case 1:
      return x + 1;

    case 3:
      return x - 1;

    default:
      return x;
  }
};

const updateYVal = (dir, y) => {
  switch (dir) {
    case 2:
      return y + 1;

    case 4:
      return y - 1;

    default:
      return y;
  }
};

const getMemoryVal = (x, y, memory) => {
  return memory[x + ", " + y] || 0;
};

console.log("PART 1 ANSWER: " + getNumSteps(inputNum));
console.log("PART 2 ANSWER: " + buildSpiral(inputNum));

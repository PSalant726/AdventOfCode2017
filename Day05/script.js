const AdventInput = require("../adventInput.js");

const input = new AdventInput(5);
const inputArr = input.content;

const getStepsToExit = (directions, part) => {
  // NOTE: Cloning the 'directions' array is only required to
  // get the correct answers to parts 1 & 2 simultaneously
  let stepArr = directions.slice(0);
  let stepsTaken = 0;
  let i = 0;

  while (i >= 0 && i < stepArr.length) {
    stepsTaken += 1;

    if (part === 2 && stepArr[i] >= 3) {
      stepArr[i] -= 1;
      i += stepArr[i] + 1;

    } else {
      stepArr[i] += 1;
      i += stepArr[i] - 1;
    }
  }

  return stepsTaken;
};

console.log("PART 1 ANSWER: " + getStepsToExit(inputArr, 1));
console.log("PART 2 ANSWER: " + getStepsToExit(inputArr, 2));

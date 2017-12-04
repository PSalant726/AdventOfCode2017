let fs = require("fs");

const inputText = fs.readFileSync(process.argv[2], { encoding : 'utf-8' });
const inputArr = inputText.split("").map(numStr => {
  return parseInt(numStr, 10);
});

const nextDigitSum = (arr) => {
  let sum = 0;

  arr.forEach((num, idx) => {
    let nextNum = arr[idx + 1];

    if (nextNum && (num === nextNum)) {
      sum += num;

    } else if ((idx === arr.length - 1) && (num === arr[0])) {
      sum += num;
    }
  });

  return sum;
};

const halfAroundSum = (arr) => {
  let sum = 0;

  arr.forEach((num, idx) => {
    let newIdx = idx + (arr.length / 2);
    let corrNum = arr[newIdx] || arr[newIdx - arr.length];

    if (corrNum && (num === corrNum)) sum += num;
  });

  return sum;
};

console.log("PART 1 ANSWER: " + nextDigitSum(inputArr));
console.log("PART 2 ANSWER: " + halfAroundSum(inputArr));

let fs = require("fs");

const inputText = fs.readFileSync(process.argv[2], { encoding : 'utf-8' });
const inputArr = inputText.split("\n").map(row => {
  return row.split("\t").map(num => {
    return parseInt(num, 10);
  });
});

const getDifferenceCheckSum = (sheet) => {
  let checkSum = 0;

  sheet.forEach(row => {
    checkSum += getRowDifference(row);
  });

  return checkSum;
};

const getQuotientCheckSum = (sheet) => {
  let checkSum = 0;

  sheet.forEach(row => {
    checkSum += getRowQuotient(row);
  });

  return checkSum;
};

const getRowDifference = (row) => {
  let max = row[0];
  let min = row[0];

  row.forEach(num => {
    if (num > max) {
      max = num;

    } else if (num < min) {
      min = num;
    }
  });

  return max - min;
};

const getRowQuotient = (row) => {
  let numerator, denominator;

  row.forEach((nume, numeIdx) => {
    row.forEach((denom, denomIdx) => {
      if ((numeIdx !== denomIdx) && (nume % denom === 0)) {
        numerator = nume;
        denominator = denom;
      }
    });
  });

  return numerator / denominator;
};

console.log("PART 1 ANSWER: " + getDifferenceCheckSum(inputArr));
console.log("PART 2 ANSWER: " + getQuotientCheckSum(inputArr));

const AdventInput = require("../adventInput.js");

const input = new AdventInput(4);
const inputArr = input.content;

const getValidPassphraseCount = (phraseArr, part) => {
  let validPhrases = 0;

  phraseArr.forEach(phrase => {
    const words = phrase.split(" ");

    if (part === 1 && !hasDuplicates(words)) {
      validPhrases += 1;
    } else if (!hasDuplicates(words) && !hasAnagrams(words)) {
      validPhrases += 1;
    }
  });

  return validPhrases;
};

const hasDuplicates = (arr) => {
  let seen = [];

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    if (seen.indexOf(el) < 0) {
      seen.push(el);
    } else {
      return true;
    }
  }

  return false;
};

const hasAnagrams = (words) => {
  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    for (let j = i + 1; j < words.length; j++) {
      const compWord = words[j];

      if (areAnagrams(word, compWord)) return true;
    }
  }

  return false;
};

const areAnagrams = (str1, str2) => {
  let str1Letters = str1.split("").sort().join("");
  let str2Letters = str2.split("").sort().join("");

  return str1Letters === str2Letters;
};

console.log("PART 1 ANSWER: " + getValidPassphraseCount(inputArr, 1));
console.log("PART 2 ANSWER: " + getValidPassphraseCount(inputArr, 2));

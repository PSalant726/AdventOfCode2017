const fs = require("fs");

class AdventInput {
  constructor(day) {
    this.day = day;
    this.content = this.getInputContent(day);
  }

  getInputContent(day) {
    let inputText = fs.readFileSync(process.argv[2], { encoding : 'utf-8' });

    switch (day) {
      case 1:
        return inputText.split("").map(numStr => {
          return parseInt(numStr, 10);
        });

      case 2:
        return inputText.split("\n").map(row => {
          return row.split("\t").map(num => {
            return parseInt(num, 10);
          });
        });

      case 3:
        return parseInt(inputText);

      case 4:
        return inputText.split("\n");

      default:
        throw new Error(`Day ${day} not configured.`);
    }
  }
};

module.exports = AdventInput;

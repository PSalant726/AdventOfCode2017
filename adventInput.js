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
        return parseInt(inputText, 10);

      case 4:
        return inputText.split("\n");

      case 5:
        return inputText.split("\n").map(num => {
          return parseInt(num, 10);
        });

      case 6:
        return inputText.split("\t").map(num => {
          return parseInt(num, 10);
        });

      case 7:
        return this.buildMap(inputText);

      default:
        throw new Error(`Day ${day} not configured.`);
    }
  }

  buildMap(input) {
    let map = {};

    input.split("\n").forEach(row => {
      let program = row.split(" ")[0].trim();
      let children = row.split("> ")[1] || [];
      let weight = parseInt(row.match(/\((\d+)\)/)[1], 10);

      if (children.length) {
        children = children.split(",").map(name => {
          return name.trim();
        });
      }

      map[program] = [children, weight];
    });

    return map;
  }
};

module.exports = AdventInput;

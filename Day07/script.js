const AdventInput = require("../adventInput.js");
const PolyTreeNode = require("./polyTreeNode.js");

const input = new AdventInput(7);
const inputObj = input.content;

const getRootNode = (tree) => {
  let rootNode;

  tree.forEach(node => {
    if (node.isRoot()) rootNode = node;
  });

  return rootNode;
};

const buildTree = (map) => {
  let nodes = [];

  for (const program in map) {
    if (map.hasOwnProperty(program)) {
      let weight = map[program][1];
      let node = new PolyTreeNode(program, weight);

      nodes.push(node);
    }
  }

  assignChildNodes(nodes, map);

  return nodes;
};

const assignChildNodes = (nodes, map) => {
  nodes.forEach(node => {
    let childNodeNames = map[node.name][0];

    childNodeNames.forEach(childNodeName => {
      let childNode = nodes.filter(potentialChildNode => {
        return potentialChildNode.name === childNodeName;
      })[0];

      node.addChild(childNode);
    });
  });
};

const getProblemNodeTowers = (tree) => {
  let problemNodes = tree.filter(node => {
    let towerWeights = getTowerWeights(node);
    return Object.keys(towerWeights).length > 1;
  });

  return getTowerWeights(problemNodes[0]);
};

const getTowerWeights = (node) => {
  let towerWeights = {};

  node.children.forEach(child => {
    let towerWeight = child.weight + getDiscWeight(child);

    if (towerWeights[towerWeight]) {
      towerWeights[towerWeight].push(child);
    } else {
      towerWeights[towerWeight] = [child];
    }
  });

  return towerWeights;
};

const getDiscWeight = (node) => {
  let childNodes = node.children;

  if (childNodes.length) {
    return childNodes.reduce((sum, childNode) => {
      if (childNode.children.length) {
        return sum + getDiscWeight(childNode) + childNode.weight;

      } else {
        return sum + childNode.weight;
      }
    }, 0);

  } else {
    return 0;
  }
};

const getCorrectWeight = (towers) => {
  let problemWeight, correctTowerWeight, problemTowerWeight;

  for (const tower in towers) {
    if (towers.hasOwnProperty(tower)) {
      if (towers[tower].length === 1) {
        problemWeight = towers[tower][0].weight;
        problemTowerWeight = tower;

      } else {
        correctTowerWeight = tower;
      }
    }
  }

  return problemWeight - (problemTowerWeight - correctTowerWeight);
};

const myTree = buildTree(inputObj);
const problemNodeTowers = getProblemNodeTowers(myTree);

console.log("PART 1 ANSWER: " + getRootNode(myTree).name);
console.log("PART 2 ANSWER: " + getCorrectWeight(problemNodeTowers));

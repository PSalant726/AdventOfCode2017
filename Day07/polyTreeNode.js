class PolyTreeNode {
  constructor(name, weight) {
    this.name = name;
    this.children = [];
    this.parent = null;
    this.weight = weight;
  }

  setParentNode(node) {
    this.parent = node;
  }

  addChild(node) {
    node.setParentNode(this);
    this.children.push(node);
  }

  isRoot() {
    return !this.parent;
  }
};

module.exports = PolyTreeNode;

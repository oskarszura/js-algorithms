class Tree {
  constructor (data) {
    this._root = new Node(data);
  }

  traverseDF (callback) {
    function traverse(node) {
      for(let i = 0; i < node.children.length; i++) {
        traverse(node.children[i]);
      }

      callback(node);
    }

    traverse(this._root);
  }

  traverseBF (callback) {
    function traverse(node) {
      for(let i = 0; i < node.children.length; i++) {
        callback(node.children[i]);
      }

      for(let i = 0; i < node.children.length; i++) {
        traverse(node.children[i]);
      }

    }

    callback(this._root);
    traverse(this._root);
  }
}

class Node {
  constructor (data) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }
}

var tree = new Tree('one');
tree._root.children.push(new Node('two'));
tree._root.children[0].parent = tree;

tree._root.children.push(new Node('three'));
tree._root.children[1].parent = tree;

tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;
tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];

tree.traverseBF(function(node) {
  console.log(node.data)
});

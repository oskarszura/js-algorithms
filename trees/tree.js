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

  contains (callback, traversal) {
    traversal.call(this, callback);
  }

  add(data, toData, traversal) {
    let parent;

    this.contains(node => {
      if(node.data === toData) {
        parent = node;
      }
    }, traversal);

    if(parent) {
      parent.children.push(new Node(data));
    } else {
      throw new Error('Cannot add new node to non existing node');
    }
  }
}

class Node {
  constructor (data) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }
}

const tree = new Tree('one');

tree.add('two', 'one', tree.traverseDF);
tree.add('three', 'one', tree.traverseDF);

tree.add('four', 'two', tree.traverseDF);
tree.add('five', 'two', tree.traverseDF);

tree.add('six', 'three', tree.traverseDF);
tree.add('seven', 'three', tree.traverseDF);

tree.contains(node => {
  if (node.data === 'two') {
    console.log(node);
  }
}, tree.traverseBF);

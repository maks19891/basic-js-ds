// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (this.head) {
      return this.head
    } else {
      return null
    }
  }

  add(/* data */) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.head = addNode(this.head, data);
    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data == data) {
        return node;
      }
      if (node.data > data) {
        node.left = addNode(node.left, data)
      } else {
        node.right = addNode(node.right, data)
      }
      return node
    }
  }

  has(/* data */) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return hasNode(this.head, data);
    function hasNode(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {

        return true;
      }
      if (node.data > data) {
        return hasNode(node.left, data)
      } else {
        return hasNode(node.right, data)
      }
    }
  }

  find(/* data */) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return findNode(this.head, data)
    function findNode(node, data) {
      if (!node) {
        return null
      }
      if (node.data === data) {
        return node
      }
      if (node.data > data) {
        return findNode(node.left, data)
      } else {
        return findNode(node.right, data)
      }
    }
  }

  remove(/* data */) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.head = removeNode(this.head, data)
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data > data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      } else if (node.data == data) {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left
          return node
        }

        let minNode = node.right;
        while (minNode.left) {
          minNode = minNode.left
        }

        node.data = minNode.data;

        node.right = removeNode(node.right, minNode.data)

        return node

      }

    }
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return minNode(this.head)
    function minNode(node) {
      if (node.left == null) {
        return node.data
      } else {
        return minNode(node.left)
      }
    }
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return maxNode(this.head)
    function maxNode(node) {
      if (node.right == null) {
        return node.data;
      } else {
        return maxNode(node.right)
      }
    }

  }
}

module.exports = {
  BinarySearchTree
};
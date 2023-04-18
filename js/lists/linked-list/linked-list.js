import LinkedListNode from './linked-list-node.js';
/**
 * Implementation of Java's java.util.LinkedList
 * https://docs.oracle.com/javase/7/docs/api/java/util/LinkedList.html
 */
export default class LinkedList {
  constructor() {
    this._size = 0;
    /** @type {LinkedListNode} */
    this._first = null;
  }

  /**
   * Add an item to the end of the list.
   *
   * @param {*} item
   * @param {number} [index]
   */
  add(item) {
    let node = this._first;
    const newNode = new LinkedListNode(item);

    if (node === null) {
      this._first = newNode;
    } else {
      while (node._next !== null) {
        node = node._next;
      }

      node._next = newNode;
    }

    this._size++;
  }

  /**
   * Add an item to the specified position.
   *
   * @param {*} item
   * @param {number} index
   */
  addAtIndex(item, index) {
    if (index >= this._size) {
      throw new RangeError(
        `Index (${index}) is greater than or equal to size (${this._size}).`,
      );
    }

    if (index === 0) {
      this.addFirst(item);
      return;
    }

    const newNode = new LinkedListNode(item);

    const previousNode = this.getNode(index - 1);

    const nextNode = previousNode._next;
    previousNode._next = newNode;
    newNode._next = nextNode;

    this._size++;
  }
  // /**
  //  * Add all items in a list to the list.
  //  * If an index is passed, insert to specified position.
  //  *
  //  * @param {LinkedList} list
  //  * @param {number} [index]
  //  */
  // addAll(list, index) {
  //
  // }

  /**
   * Add an item to the start of the list
   *
   * @param {*} item
   */
  addFirst(item) {
    const temporaryNode = this._first;
    const newNode = new LinkedListNode(item);

    this._first = newNode;
    newNode._next = temporaryNode;

    this._size++;
  }

  /**
   * Remove every item from the list
   */
  clear() {
    if (this._size === 0) {
      return;
    }

    let node = this._first;
    // Let nextNode = node === null ? null : node._next;
    let nextNode = node._next;

    while (nextNode !== null) {
      node = null;
      node = nextNode;
      nextNode = node._next;
    }

    this._first = null;
    this._size = 0;
  }

  /**
   * Returns a copy of the list
   *
   * @return {LinkedList}
   */
  clone() {
    const clone = new LinkedList();
    const node = this._first;

    clone._first = node.clone();

    const cloneNode = clone._first;

    this.traverse((node, index) => {
      if (index === 0) {
        clone._first = node.clone();
      }

      cloneNode._next = node._next === null ? null : node._next.clone();
    });

    clone._size = this._size;

    return clone;
  }

  /**
   * Retrns true if the list contains the specified item
   *
   * @param {*} item
   * @return {boolean}
   */
  contains(item) {
    if (this._size === 0 || item === undefined) {
      return false;
    }

    let doesContainItem = false;
    let node = this._first;

    while (doesContainItem === false && node !== null) {
      if (node._data === item) {
        doesContainItem = true;
      }

      node = node._next;
    }

    return doesContainItem;
  }

  /**
   * Retrieves, but does not remove, the list's first item
   *
   * @return {*}
   */
  element() {
    if (this._size === 0) {
      return null;
    }

    return this._first._data;
  }

  /**
   * Returns the item at the specified position
   *
   * @param {number} index
   * @return {*}
   */
  get(index) {
    if (index >= this._size) {
      throw new RangeError(
        `Index (${index}) is greater than or equal to size (${this._size}).`,
      );
    }

    let node = this._first;
    let i = 0;

    while (node._next !== null && i++ < index) {
      node = node._next;
    }

    return node._data;
  }

  /**
   * Returns the node at the specified position
   *
   * @param {number} index
   * @return {LinkedListNode}
   */
  getNode(index) {
    if (index >= this._size) {
      throw new RangeError(
        `Index (${index}) is greater than or equal to size (${this._size}).`,
      );
    }

    let node = this._first;
    let i = 0;

    while (i++ < index) {
      node = node._next;
    }

    return node;
  }

  /**
   * Returns the list's last item
   *
   * @return {*}
   */
  getLast() {
    if (this._size === 0) {
      return null;
    }

    let lastNode;
    this.traverse((node, index) => {
      if (index === this._size - 1) {
        lastNode = node;
      }
    });
    return lastNode._data;
  }

  /**
   * Returns the list's last node
   *
   * @return {LinkedListNode}
   */
  getLastNode() {
    if (this._size === 0) {
      return null;
    }

    let lastNode;
    this.traverse((node, index) => {
      if (index === this._size - 1) {
        lastNode = node;
      }
    });
    return lastNode;
  }

  /**
   * Returns the index of the first occurrence of the specified item in the list,
   * or -1 if it doesn't exist
   *
   * @param {*} item
   * @return {number}
   */
  indexOf(item) {
    if (this._size === 0 || item === undefined) {
      return -1;
    }

    let index = -1;

    this.traverse((node, i) => {
      if (index === -1 && node._data === item) {
        index = i;
      }
    });

    return index;
  }

  /**
   * Returns the index of the last occurrence of the specified item in the list,
   * or -1 if it doesn't exist
   *
   * @param {*} item
   * @return {number}
   */
  lastIndexOf(item) {
    if (this._size === 0 || item === undefined) {
      return -1;
    }

    let index = -1;

    this.traverse((node, i) => {
      if (node._data === item) {
        index = i;
      }
    });

    return index;
  }

  /**
   * Returns the number of items in the list
   *
   * @returns {number}
   */
  size() {
    return this._size;
  }

  /**
   *
   * @param {function(LinkedListNode, number)} callback
   */
  traverse(callback) {
    let node = this._first;
    let i = 0;

    while (node !== null) {
      callback(node, i);

      node = node._next;
      i++;
    }
  }

  /**
   * Returns the linked list's nodes as an array
   *
   * @return {LinkedListNode[]}
   */
  toNodeArray() {
    const array = Array.from({length: this._size});

    this.traverse((node, index) => {
      array[index] = node;
    });

    return array;
  }

  /**
   * Returns the linked list's data as an array.
   *
   * @return {*[]}
   */
  toArray() {
    const array = Array.from({length: this._size});

    this.traverse((node, index) => {
      array[index] = node._data;
    });

    return array;
  }

  /**
   * Returns a string representation of the array
   * @return {string}
   */
  toString() {
    return this.toArray().toString();
  }
}

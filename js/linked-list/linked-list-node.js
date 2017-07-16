export default class LinkedListNode {
  constructor(data) {
        /** @type {LinkedListNode} */
    this._next = null;
    this._data = data;
  }

  clone() {
    return new LinkedListNode(this._data);
  }
}

// Module.exports = LinkedListNode;

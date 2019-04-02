import LinkedList from './linked-list';
import LinkedListNode from './linked-list-node';
import test from 'ava';

// Import {iterate} from 'leakage';

/** @type {LinkedList} */
let list;

test.beforeEach('Set up list', () => {
  list = new LinkedList();
  const el1 = '1';
  const el2 = '2';
  const el3 = '3';
  const el4 = '4';

  list.add(el1);
  list.add(el2);
  list.add(el3);
  list.add(el4);
});

test.afterEach('Clear list', () => {
  list.clear();
});

test.serial('size() returns the size of the list', t => {
  t.is(list.size(), 4);
  t.not(list.size(), 3);
});

test.serial('clear() removes every element from the list', t => {
  list.clear();

  t.is(list.size(), 0);
  t.is(list._first, null);
});

test.serial('clear() does not break when used on an empty list', t => {
  const newList = new LinkedList();
  newList.clear();

  t.is(newList._first, null);
});

test.serial('clear() does not break when used on a list with only one element', t => {
  const newList = new LinkedList();
  newList.add('item');
  newList.clear();

  t.is(newList._first, null);
});

test.serial('clear() empties the entire list', t => {
  let count = 0;

  list.clear();

  list.traverse(() => {
    count++;
  });

  t.is(count, 0);
});

// test.serial('clear() doesn\'t leak', () => {
//   const newList = new LinkedList();

//   iterate(() => {
//     const el1 = '1';
//     const el2 = '2';
//     const el3 = '3';
//     const el4 = '4';

//     newList.add(el1);
//     newList.add(el2);
//     newList.add(el3);
//     newList.add(el4);

//     newList.clear();
//   });
// });

test.serial('add() sets the list\'s `_first` item to the first if the list was empty', t => {
  const newList = new LinkedList();

  t.is(newList._first, null);

  newList.add('item');

  t.is(newList._first._data, 'item');
});

test.serial('add() adds an item to the end of the list', t => {
  list.add('5');

  console.log('list', list);

  t.is(list.size(), 5);
});

test.serial('add() sets the second last item\'s `_next` value to the new item\'s node', t => {
  const secondLast = list.getLastNode();
  list.add('5');

  t.is(secondLast._next._data, '5');
});

test.serial('addAtIndex() adds an item to the specified index', t => {
  const el = '5';
  list.addAtIndex(el, 3);

  t.is(list.get(3), el);
});

test.serial('addAtIndex(item, 0) adds an item to the beginning of the list', t => {
  const el = '5';
  list.addAtIndex(el, 0);
  console.log(list.toString());
  t.is(list.get(0), el);
});

test.serial('addAtIndex() throws an error if index is greater than list size', t => {
  const el = '5';
  const size = list.size();
  const index = size;
  const error = t.throws(() => {
    list.addAtIndex(el, index);
  }, RangeError);

  t.is(error.message, `Index (${index}) is greater than or equal to size (${size}).`);
});

// test.serial('addAll(list) adds every element of a list to the end of the list', t => {
//   const newList = new LinkedList();

//   t.is(list.size(), 4);

//   newList.add('5');
//   newList.add('6');
//   list.addAll(newList);

//   t.is(list.size(), 6);
// });

test.serial('addFirst() adds the specified element to the start of the list', t => {
  const el = '0';
  list.addFirst(el);

  t.is(list.get(0), el);
});

test.serial('clone() creates a copy of the list', t => {
  const clone = list.clone();
  clone.add('5');

  t.is(clone.size(), 5);
  t.is(list.size(), 4);
});

test.serial('contains() returns true if the list contains the specified element', t => {
  const el = '5';
  list.add(el);

  t.true(list.contains('5'));
  t.false(list.contains('6'));
});

test.serial('contains() returns false if the list is empty', t => {
  const newList = new LinkedList();

  t.false(newList.contains('item'));
});

test.serial('contains() returns false if no parameter', t => {
  t.false(list.contains());
});

test.serial('indexOf() returns the first index of the specified element, or -1', t => {
  const el = '5';
  const el2 = '5';

  list.add(el);
  list.add(el2);

  t.is(list.indexOf('5'), 4);
  t.is(list.indexOf('6'), -1);
});

test.serial('indexOf() returns -1 if the list is empty', t => {
  const newList = new LinkedList();

  t.is(newList.indexOf('item'), -1);
});

test.serial('indexOf() returns -1 if no parameter', t => {
  t.is(list.indexOf(), -1);
});

test.serial('lastIndexOf() returns the last index of the specified element, or -1', t => {
  const el = '5';
  const el2 = '5';

  list.add(el);
  list.add(el2);

  t.is(list.lastIndexOf('5'), 5);
});

test.serial('lastIndexOf() returns -1 if the list is empty', t => {
  const newList = new LinkedList();

  t.is(newList.lastIndexOf('item'), -1);
});

test.serial('lastIndexOf() returns -1 if no parameter', t => {
  t.is(list.lastIndexOf(), -1);
});

test.serial('element() retrieves, but does not remove, the first element of the list', t => {
  const el = list.element();

  t.is(el, '1');
});

test.serial('element() returns null if the list is empty', t => {
  const newList = new LinkedList();

  t.is(newList.element(), null);
});

test.serial('get() returns the element at the specified position', t => {
  t.is(list.get(0), '1');
  t.is(list.get(list.size() - 1), '4');
});

test.serial('get() throws a RangeError if the specified index is greater than or equal to the list\'s size', t => {
  const size = list.size();
  const index = size;
  const error = t.throws(() => {
    list.get(index);
  }, RangeError);

  t.is(error.message, `Index (${index}) is greater than or equal to size (${size}).`);
});

test.serial('getNode() returns the node at the specified position', t => {
  t.is(list.getNode(0)._data, '1');
  t.is(list.getNode(list.size() - 1)._data, '4');
});

test.serial('getNode() throws a RangeError if the specified index is greater than or equal to the list\'s size', t => {
  const size = list.size();
  const index = size;
  const error = t.throws(() => {
    list.getNode(index);
  }, RangeError);

  t.is(error.message, `Index (${index}) is greater than or equal to size (${size}).`);
});

test.serial('getLast() returns the last element', t => {
  t.is(list.getLast(), '4');
});

test.serial('getLast() returns null if the list is empty', t => {
  const newList = new LinkedList();

  t.is(newList.getLast(), null);
});

test.serial('getLastNode() returns the last node', t => {
  t.is(list.getLastNode()._data, '4');
});

test.serial('getLastNode() returns null if the list is empty', t => {
  const newList = new LinkedList();

  t.is(newList.getLastNode(), null);
});

test.serial('toNodeArray() returns the list\'s nodes as an array', t => {
  const newList = new LinkedList();

  const el1 = 'item1';
  const el2 = 'item2';

  const node1 = new LinkedListNode(el1);
  const node2 = new LinkedListNode(el2);

  newList.add(el1);
  newList.add(el2);

  t.is(newList.toNodeArray()[0]._data, node1._data);
  t.is(newList.toNodeArray()[0]._next._data, node2._data);
  t.is(newList.toNodeArray()[1]._data, node2._data);
  t.is(newList.toNodeArray()[1]._next, null);
});

test.serial('toArray() returns the list\'s data as an array', t => {
  const newList = new LinkedList();

  const el1 = 'item1';
  const el2 = 'item2';
  const arr = [el1, el2];

  newList.add(el1);
  newList.add(el2);

  t.is(newList.toArray().length, arr.length);
  t.is(newList.toArray()[0], arr[0]);
  t.is(newList.toArray()[1], arr[1]);
});

test.serial('toString() returns the list\'s data as a string', t => {
  const newList = new LinkedList();

  const el1 = 'item1';
  const el2 = 'item2';
  const arr = [el1, el2];

  newList.add(el1);
  newList.add(el2);

  t.is(newList.toString(), arr.toString());
});

import test from 'ava';
// Import {iterate} from 'leakage';
import LinkedList from './linked-list';
import LinkedListNode from './linked-list-node';

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

test('size() returns the size of the list', t => {
  t.is(list.size(), 4);
  t.not(list.size(), 3);
});

test('clear() removes every element from the list', t => {
  list.clear();

  t.is(list.size(), 0);
});

// Test('clear() doesn\'t leak', () => {
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

test('add() sets the list\'s `_first` item to the first if the list was empty', t => {
  const newList = new LinkedList();

  t.is(newList._first, null);

  newList.add('item');

  t.is(newList._first._data, 'item');
});

test('add() adds an item to the end of the list', t => {
  list.add('5');

  t.is(list.size(), 5);
});

test('add() sets the second last item\'s `_next` value to the new item\'s node', t => {
  const secondLast = list.getLastNode();
  list.add('5');

  t.is(secondLast._next._data, '5');
});

test('addWithIndex(item, i) adds an item to the specified index', t => {
  const el = '5';
  list.addAtIndex(el, 3);

  t.is(list.get(3), el);
});

// Test('addAll(list) adds every element of a list to the end of the list', t => {
//   const newList = new LinkedList();

//   t.is(list.size(), 4);

//   newList.add('5');
//   newList.add('6');
//   list.addAll(newList);

//   t.is(list.size(), 6);
// });

test('addFirst() adds the specified element to the start of the list', t => {
  const el = '0';
  list.addFirst(el);

  t.is(list.get(0), el);
});

test('clone() creates a copy of the list', t => {
  const clone = list.clone();
  clone.add('5');

  t.is(clone.size(), 5);
  t.is(list.size(), 4);
});

test('contains() returns true if the list contains the specified element', t => {
  const el = '5';
  list.add(el);

  t.true(list.contains('5'));
  t.false(list.contains('6'));
});

test('indexOf() returns the first index of the specified element, or -1', t => {
  const el = '5';
  const el2 = '5';

  list.add(el);
  list.add(el2);

  t.is(list.indexOf('5'), 4);
  t.is(list.indexOf('6'), -1);
});

test('lastIndexOf() returns the last index of the specified element, or -1', t => {
  const el = '5';
  const el2 = '5';

  list.add(el);
  list.add(el2);

  t.is(list.lastIndexOf('5'), 5);
});

test('element() retrieves, but does not remove, the first element of the list', t => {
  const el = list.element();

  t.is(el, '1');
});

test('get(index) returns the element at the specified position', t => {
  t.is(list.get(0), '1');
  t.is(list.get(list.size() - 1), '4');
});

test('getNode() returns the node at the specified position', t => {
  t.is(list.getNode(0)._data, '1');
  t.is(list.getNode(list.size() - 1)._data, '4');
});

test('getLast() returns the last element', t => {
  t.is(list.getLast(), '4');
});

test('getLastNode() returns the last node', t => {
  t.is(list.getLastNode()._data, '4');
});

test('toNodeArray() returns the list\'s nodes as an array', t => {
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

test('toArray() returns the list\'s data as an array', t => {
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

test('toString() returns the list\'s data as a string', t => {
  const newList = new LinkedList();

  const el1 = 'item1';
  const el2 = 'item2';
  const arr = [el1, el2];

  newList.add(el1);
  newList.add(el2);

  t.is(newList.toString(), arr.toString());
});

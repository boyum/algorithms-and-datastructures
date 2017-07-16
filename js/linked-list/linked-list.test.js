// Const test = require('ava');
// const LinkedList = require('./linked-list');

import test from 'ava';
import LinkedList from './linked-list';

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

test('add(item) adds an item to the end of the list', t => {
  list.add('5');

  t.is(list.size(), 5);
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

  el.add(el);
  el.add(el2);

  t.is(list.indexOf('5'), 4);
  t.is(list.indexOf('6'), -1);
});

test('lastIndexOf() returns the last index of the specified element, or -1', t => {
  const el = '5';
  const el2 = '5';

  el.add(el);
  el.add(el2);

  t.is(list.indexOf('5'), 5);
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

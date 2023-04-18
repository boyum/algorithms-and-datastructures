import test from 'ava';
import InsertionSort from './insertion-sort.js';

const array = [12, 3, 1, 2, 2, 2, 2, 5, -1, 4, 3, 6, 7, 4];
const sorted = [-1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 7, 12];
const reverse = [12, 7, 6, 5, 4, 4, 3, 3, 2, 2, 2, 2, 1, -1];

/** @type {InsertionSort} */
let bs = null;

test.before('Init InsertionSort', () => {
  bs = new InsertionSort();
});

test('sortAsc() sorts the array ascending', t => {
  const sortedArray = bs.sortAsc(array);

  for (const [index, element] of sortedArray.entries()) {
    t.is(element, sorted[index]);
  }
});

test('sortDesc() sorts the array descending', t => {
  const sortedArray = bs.sortDesc(array);

  for (const [index, element] of sortedArray.entries()) {
    t.is(element, reverse[index]);
  }
});

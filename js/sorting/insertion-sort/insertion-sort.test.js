import test from 'ava';
import InsertionSort from './insertion-sort';

const arr = [12, 3, 1, 2, 2, 2, 2, 5, -1, 4, 3, 6, 7, 4];
const sorted = [-1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 7, 12];
const reverse = [12, 7, 6, 5, 4, 4, 3, 3, 2, 2, 2, 2, 1, -1];

/** @type {InsertionSort} */
let bs = null;

test.before('Init InsertionSort', () => {
  bs = new InsertionSort();
});

test('sortAsc() sorts the array ascending', t => {
  const sortedArr = bs.sortAsc(arr);

  sortedArr.forEach((el, index) => {
    t.is(el, sorted[index]);
  });
});

test('sortDesc() sorts the array descending', t => {
  const sortedArr = bs.sortDesc(arr);

  sortedArr.forEach((el, index) => {
    t.is(el, reverse[index]);
  });
});

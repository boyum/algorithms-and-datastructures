import test from 'ava';
import BubbleSort from './bubble-sort';

const arr = [12, 3, 1, 2, 2, 2, 2, 5, -1, 4, 3, 6, 7, 4];
const sorted = [-1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 6, 7, 12];
const reverse = [12, 7, 6, 5, 4, 4, 3, 3, 2, 2, 2, 2, 1, -1];

/** @type {BubbleSort} */
let bs = null;

test.before('Init bubblesort', () => {
  bs = new BubbleSort();
});

test('sort() sorts the array', t => {
  const sortedArr = bs.sort(arr);

  sortedArr.forEach((el, index) => {
    t.is(el, sorted[index]);
  });
});

test('sortReverse() sorts the array from greatest to smallest', t => {
  const sortedArr = bs.sortReverse(arr);

  sortedArr.forEach((el, index) => {
    t.is(el, reverse[index]);
  });
});

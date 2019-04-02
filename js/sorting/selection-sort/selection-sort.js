export default class SelectionSort {
  /**
   *
   * @param {*[]} array
   * @return {*[]}
   */
  sortAsc(array) {
    const newArr = [...array];

    let min = 0;
    let i = 0;
    let j = 1;

    for (; i < newArr.length; i++) {
      min = i;
      for (j = i + 1; j < newArr.length; j++) {
        if (newArr[min] > newArr[j]) {
          min = j;
        }
      }

      if (i !== min) {
        this.swap(newArr, i, min);
      }
    }

    return newArr;
  }

  /**
   *
   * @param {*[]} array
   * @return {*[]}
   */
  sortDesc(array) {
    const newArr = [...array];

    let max = 0;
    let i = 0;
    let j = 1;

    for (; i < newArr.length; i++) {
      max = i;
      for (j = i + 1; j < newArr.length; j++) {
        if (newArr[max] < newArr[j]) {
          max = j;
        }
      }

      if (i !== max) {
        this.swap(newArr, i, max);
      }
    }

    return newArr;
  }

  /**
   *
   * @param {*[]} array
   * @param {number} index1
   * @param {number} index2
   */
  swap(array, index1, index2) {
    const temp = array[index1];

    array[index1] = array[index2];
    array[index2] = temp;
  }
}

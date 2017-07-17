export default class InsertionSort {
  /**
   *
   * @param {*[]} array
   * @return {*[]}
   */
  sortAsc(array) {
    const newArr = [...array];

    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] < newArr[i + 1]) {
        this.swap(newArr, i, i + 1);
      }

      for (let j = i; j > 0; j--) {
        if (newArr[j] < newArr[j - 1]) {
          this.swap(newArr, j, j - 1);
        }
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

    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] > newArr[i + 1]) {
        this.swap(newArr, i, i + 1);
      }

      for (let j = i; j > 0; j--) {
        if (newArr[j] > newArr[j - 1]) {
          this.swap(newArr, j, j - 1);
        }
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

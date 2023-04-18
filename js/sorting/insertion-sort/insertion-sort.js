export default class InsertionSort {
  /**
   *
   * @param {*[]} array
   * @return {*[]}
   */
  sortAsc(array) {
    const newArray = [...array];

    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] < newArray[i + 1]) {
        this.swap(newArray, i, i + 1);
      }

      for (let j = i; j > 0; j--) {
        if (newArray[j] < newArray[j - 1]) {
          this.swap(newArray, j, j - 1);
        }
      }
    }

    return newArray;
  }

  /**
   *
   * @param {*[]} array
   * @return {*[]}
   */
  sortDesc(array) {
    const newArray = [...array];

    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i] > newArray[i + 1]) {
        this.swap(newArray, i, i + 1);
      }

      for (let j = i; j > 0; j--) {
        if (newArray[j] > newArray[j - 1]) {
          this.swap(newArray, j, j - 1);
        }
      }
    }

    return newArray;
  }

  /**
   *
   * @param {*[]} array
   * @param {number} index1
   * @param {number} index2
   */
  swap(array, index1, index2) {
    const temporary = array[index1];

    array[index1] = array[index2];
    array[index2] = temporary;
  }
}

export default class SelectionSort {
  /**
   *
   * @param {*[]} array
   * @return {*[]}
   */
  sortAsc(array) {
    const newArray = [...array];

    let min = 0;
    let i = 0;
    let j = 1;

    for (; i < newArray.length; i++) {
      min = i;
      for (j = i + 1; j < newArray.length; j++) {
        if (newArray[min] > newArray[j]) {
          min = j;
        }
      }

      if (i !== min) {
        this.swap(newArray, i, min);
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

    let max = 0;
    let i = 0;
    let j = 1;

    for (; i < newArray.length; i++) {
      max = i;
      for (j = i + 1; j < newArray.length; j++) {
        if (newArray[max] < newArray[j]) {
          max = j;
        }
      }

      if (i !== max) {
        this.swap(newArray, i, max);
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

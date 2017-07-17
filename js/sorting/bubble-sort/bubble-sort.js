  export default class BubbleSort {
  /**
   *
   * @param {*[]} array
   * @return {*[]}
   */
    sortAsc(array) {
      const newArr = [...array];
      for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < (newArr.length - i); j++) {
          if (newArr[j] > newArr[j + 1]) {
            this.swap(newArr, j, j + 1);
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
        for (let j = 0; j < (newArr.length - i); j++) {
          if (newArr[j] < newArr[j + 1]) {
            this.swap(newArr, j, j + 1);
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

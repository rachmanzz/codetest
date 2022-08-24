import bubbleSort from "./bubble-sort";
import mergeSort from "./merge-sort";

const bubbleArr = bubbleSort([1, 3, 2, 9, 4, 7, 6, 10, 5]);
console.log(bubbleArr);

const bubbleArrInverse = bubbleSort([1, 3, 2, 9, 4, 7, 6, 10, 5], true);
console.log(bubbleArrInverse);

const mergeSortArr = mergeSort([1, 3, 2, 9, 4, 7, 6, 10, 5]);
console.log(mergeSortArr);
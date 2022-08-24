import bubbleSort from "./bubble-sort";

const bubbleArr = bubbleSort([1, 3, 2, 9, 4, 7, 6, 10, 5]);
console.log(bubbleArr);

const bubbleArrInverse = bubbleSort([1, 3, 2, 9, 4, 7, 6, 10, 5], true);
console.log(bubbleArrInverse);
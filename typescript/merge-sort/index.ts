const merge = (leftArr:number[], rightArr: number[]): number[] => {
    const result: number[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    const leftArrSize = leftArr.length;
    const rightArrSize = rightArr.length;

    while(leftArrSize> leftIndex && rightArrSize > rightIndex) {
        if (leftArr[leftIndex] > rightArr[rightIndex]) {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        } else {
            result.push(leftArr[leftIndex]);
            leftIndex++;
        }
    }
    return [...result, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
}

const mergeSort = (arr: number[]): number[] => {
    const size = arr.length;
    if (size <= 1) return arr;

    const middleIndex = Math.floor(size/2);
    const leftArr = arr.slice(0, middleIndex);
    const rightArr = arr.slice(middleIndex);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

export default mergeSort;
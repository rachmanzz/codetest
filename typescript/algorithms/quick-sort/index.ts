const quickSort = (arr: number[]): number[] => {
    const size = arr.length;
    if (size <= 1) return arr;
    const leftArr = [];
    const rightArr = [];
    const lastItem = arr[size-1];
    for (let item of arr.slice(0, size-1)) {
        item > lastItem ? rightArr.push(item) : leftArr.push(item);
    }

    if (leftArr.length >= 1 && rightArr.length >= 1) return [...quickSort(leftArr), lastItem, ...quickSort(rightArr)];
    else if (leftArr.length >= 1) return [...quickSort(leftArr), lastItem];
    else return [lastItem, ...quickSort(rightArr)];
}

export default quickSort;
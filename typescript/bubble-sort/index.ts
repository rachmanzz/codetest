const bubbleSort = (arr: number[]) => {
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        for (let j = i+1; j < size; j++) {
            if (arr[j] < arr[i]) {
                const current = arr[i];
                arr[i] = arr[j];
                arr[j] = current;
            }
        }
    }
    return arr;
}

export default bubbleSort;
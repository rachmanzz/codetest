const selectionSort = (arr: number[]): number[] => {
    const size = arr.length;
    if (size <= 1) return arr;

    for (let i = 0; i < size; i++) {
        let min = i;
        for (let j= i+1; j < size; j++) {
            if (arr[min] > arr[j]) min = j;
        }
        const temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }

    return arr;
}

export default selectionSort;
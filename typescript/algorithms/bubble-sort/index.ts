const bubbleSort = (arr: number[], inverse: boolean = false): number[] => {
    const size = arr.length;
    for (let i = 0; i < size; i++) {
        for (let j = i+1; j < size; j++) {
            const check: boolean = inverse ? arr[j] > arr[i] : arr[j] < arr[i];
            if (check) {
                const current = arr[i];
                arr[i] = arr[j];
                arr[j] = current;
            }
        }
    }
    return arr;
}

export default bubbleSort;
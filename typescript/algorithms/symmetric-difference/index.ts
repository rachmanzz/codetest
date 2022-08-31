const symmetricDifference = (...args: number[][]) => {
    const result: number[] = [];
    for (let items of args) {
        const temp: number[] = []
        const removed: number[] = [];
        for (let item of items) {
            if (!result.includes(item) && !temp.includes(item) && !removed.includes(item)) {
                temp.push(item);
            } else {
                if (result.includes(item)) {
                    const index = result.indexOf(item);
                    removed.push(result[index]);
                    result.splice(index, 1);
                }
            }
        }
        result.push(...temp);
    }

    return result.sort((a, b) => a - b);
}

export default symmetricDifference;


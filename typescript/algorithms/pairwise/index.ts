const pairwise = (arr: number[], arg:number) => {
    const size = arr.length;
    let result = 0;
    const used: number[] = [];
    for (let i = 0; i < size; i++) {
      const firstValue = arr[i];
      for (let j=i+1; j < size; j++) {
        const secondValue = arr[j];
        if (i !== j && !used.includes(i) && !used.includes(j) && (firstValue + secondValue) === arg) {
          result += i+j;
          used.push(i,j);
        };
      }
    }
    return result;
}

export default pairwise;
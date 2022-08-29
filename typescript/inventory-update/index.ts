
export type inventoryType = [number, string]
const updateInventory = (inventories: inventoryType[], newItems: inventoryType[]) => {
    for (let items of newItems) {
        const [count, name] = items;
        const invSize = inventories.length;
        let itemIndex;
        let hasItem = false;
        for (let i = 0; i < invSize; i ++) {
            let itemName = inventories[i][1];

            if (name === itemName) {
                hasItem = true;
                itemIndex = i;
            }

        }

        if (!hasItem) {
            inventories.push(items);
        } else {
            if (itemIndex) inventories[itemIndex][0] += count; 
        }
    }
    return inventories.sort(
        (a, b) => {
            return a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0;
        }
    );
}

export default updateInventory;
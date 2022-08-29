import React from "react";
import "../merge-sort";
import GistFrame from "./GistFrame";
import "./assets/css/index.css";
import CodeRunner from "./CodeRunner";
import bubbleSort from "../bubble-sort";
import mergeSort from "../merge-sort";
import quickSort from "../quick-sort";
import selectionSort from "../selection-sort";
import updateInventory, { inventoryType } from "../inventory-update";
const App = () =>{
    return (

        <div className="container mx-auto px-10  py-10">
            <div className="flex flex-col">
                <h1 className=" text-2xl text-center font-bold">Typescipt Algorithms</h1>
                <p className="text-center my-5">
                    a collection of Typescipt Algorithms test
                </p>
                <div className="flex justify-center items-center mt-2 gap-2 flex-row">
                <a className="p-2 bg-blue-400 rounded text-white outline-none focus:outline-none hover:bg-green-300" href="https://github.com/rachmanzz/codetest" target="_blank">View on github</a>
                    <a className="p-2 bg-blue-400 rounded text-white outline-none focus:outline-none hover:bg-green-300" href="https://github.com/rachmanzz/codetest/zipball/main" target="_blank">Download .zip</a>
                    <a className="p-2 bg-blue-400 rounded text-white outline-none focus:outline-none hover:bg-green-300" href="https://github.com/rachmanzz/codetest/tarball/main" target="_blank">Download .tar.gz</a>
                </div>
            </div>
            <h2 className="text-lg font-bold my-3">Update Inventory</h2>
            <GistFrame id="54933b7acf935622b1f651b7fbd17cac" />
            <div>
                <CodeRunner defValue="[[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']], [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']]" text={(input) => (<React.Fragment>updateInventory({input})</React.Fragment>)} run={(inventory: inventoryType[], newItems: inventoryType[]) => updateInventory(inventory, newItems)}/>
            </div>
            <h2 className="text-lg font-bold my-3">Quick Sort</h2>
            <GistFrame id="994c23f9d1907eb214ced5628c90b5c4" />
            <div>
                <CodeRunner defValue="[1,4,8,4,5,7]" text={(input) => (<React.Fragment>quickSort({input})</React.Fragment>)} pattern={/(^$)|^\[$|^\[[\d,]+$|^\[[\d,\s]+\]$|^\[[\d,\s]+\]$/} run={(item: number[]) => quickSort(item)}/>
            </div>
            <h2 className="text-lg font-bold my-3">Selection Sort</h2>
            <GistFrame id="58890e165318d08ff35dce3cdcae9e93" />
            <div>
                <CodeRunner defValue="[1,4,8,4,5,7]" text={(input) => (<React.Fragment>selectionSort({input})</React.Fragment>)} pattern={/(^$)|^\[$|^\[[\d,]+$|^\[[\d,\s]+\]$|^\[[\d,\s]+\]$/} run={(item: number[]) => selectionSort(item)}/>
            </div>
            <h2 className="text-lg font-bold my-3">Bubble Sort</h2>
            <GistFrame id="bcb2fe5098943ee5de976b5cdf0afb41" />
            <div>
                <CodeRunner defValue="[1,4,8,4,5,7]" text={(input) => (<React.Fragment>bubbleSort({input})</React.Fragment>)} pattern={/(^$)|^\[$|^\[[\d,]+$|^\[[\d,\s]+\]$|^\[[\d,\s]+\](,|,\s{0,1}|,\s{0,1}(t|tr|tru|true|f|fa|fal|fals|false))$/} run={(item: number[], inverse?: boolean) => bubbleSort(item, inverse)}/>
            </div>
            <h2 className="text-lg font-bold my-3">Merge Sort</h2>
            <GistFrame id="2caff9455aaf81f13ff5c186ddf6effa" />
            <div>
                <CodeRunner defValue="[1,4,8,4,5,7]" text={(input) => (<React.Fragment>mergeSort({input})</React.Fragment>)} pattern={/(^$)|^\[$|^\[[\d,]+$|^\[[\d,\s]+\]$|^\[[\d,\s]+\]$/} run={(item: number[]) => mergeSort(item)}/>
            </div>
        </div>
    )
}

export default App
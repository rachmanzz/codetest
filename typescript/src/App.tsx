import React from "react";
import GistFrame from "./GistFrame";
import "./assets/css/index.css";
import CodeRunner from "./CodeRunner";
import bubbleSort from "../algorithms/bubble-sort";
import quickSort from "../algorithms/quick-sort";
import selectionSort from "../algorithms/selection-sort";
import updateInventory, { inventoryType } from "../algorithms/inventory-update";
import symmetricDifference from "../algorithms/symmetric-difference";
import mergeSort from "../algorithms/merge-sort";
import pairwise from "../algorithms/pairwise";
const App = () =>{
    return (

        <div className="container mx-auto px-2 py-10">
            <div className="flex flex-col">
                <h1 className=" text-2xl text-center font-bold">Typescipt Algorithms</h1>
                <p className="text-center my-5">
                    A collection of Typescipt Algorithms test. 
                </p>
                <div className="flex justify-center items-center mt-2 gap-2 flex-row">
                    <a className="p-2 text-center bg-blue-400 rounded text-white outline-none focus:outline-none hover:bg-green-300" href="https://github.com/rachmanzz/codetest" target="_blank">view on github</a>
                    <a className="p-2 text-center bg-blue-400 rounded text-white outline-none focus:outline-none hover:bg-green-300" href="https://github.com/rachmanzz/codetest/zipball/main" target="_blank">download .zip</a>
                    <a className="p-2 text-center bg-blue-400 rounded text-white outline-none focus:outline-none hover:bg-green-300" href="https://github.com/rachmanzz/codetest/tarball/main" target="_blank">download .tar.gz</a>
                </div>
            </div>
            <div className="py-10">
                <h2 className="text-lg font-bold">Hi, there..</h2>
                <p>This collection not 100% originally from me. Some resource learned from youtube or blog or website then I modified to typescript language. And also If you want try your own code, please enter <a href="https://www.freecodecamp.org/learn/coding-interview-prep" className="text-blue-400">freecodecamp.org</a>.</p>
            </div>
            <h2 className="text-lg font-bold my-3">Symmetric Difference</h2>
            <GistFrame id="a4ef3f0cecee41562270eb9a5d414be7" />
            <div>
                <CodeRunner emptyResolve="[1, 2, 3], [5, 2, 1, 4]" hint="please enter your own value"  text={(input) => (<React.Fragment>symmetricDifference({input})</React.Fragment>)} run={(...args: number[][]) => symmetricDifference(...args)}/>
            </div>
            <h2 className="text-lg font-bold my-3">Update Inventory</h2>
            <GistFrame id="54933b7acf935622b1f651b7fbd17cac" />
            <div>
                <CodeRunner defValue="[[21, 'Bowling Ball'], [2, 'Dirty Sock'], [1, 'Hair Pin'], [5, 'Microphone']], [[2, 'Hair Pin'], [3, 'Half-Eaten Apple'], [67, 'Bowling Ball'], [7, 'Toothpaste']]" text={(input) => (<React.Fragment>updateInventory({input})</React.Fragment>)} run={(inventory: inventoryType[], newItems: inventoryType[]) => updateInventory(inventory, newItems)}/>
            </div>
            <h2 className="text-lg font-bold my-3">Pairwise</h2>
            <GistFrame id="6fbca2846ad375a25a184d9e80a5268a" />
            <div>
                <CodeRunner defValue="[0, 0, 0, 0, 1, 1], 1"  text={(input) => (<React.Fragment>pairwise({input})</React.Fragment>)} run={(arr: number[], arg: number) => pairwise(arr, arg)}/>
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
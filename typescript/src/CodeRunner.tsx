import React, { useState } from "react";

type codeProps = {
    run: (...arg: any[]) => any
    text: (input: any) => React.ReactElement
    defValue?: string
    pattern?: RegExp
}
const CodeRunner = <S,>({text, run, defValue, pattern}: codeProps) => {
    const [value, setValue] = useState<string>(defValue || "")
    const [result, setResult] = useState<S[]>()

    const valueOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = e.target.value
        if (data) {
            if (typeof pattern !== 'undefined') {
                if (pattern.test(data)) setValue(data)
            } else {
                setValue(data)
            }
        } else {
            setValue("");
        }
    }

    const onClickRun = () => {
        //const result = run(valueResolve(value))
        if (!/^[\w\d,.\s\[\]\{\}\`\`\'\'\"\"\-]+$/.test(value)) {
            alert("error, can't use illegal value")
            return
        }
        const rawData = eval(`[${value}]`)
        setResult(run(...rawData))

    }

    const ResultView = () => {
        return (
            <div className="flex flex-row bg-gray-50 m-2 border text-gray-400 items-center border-gray-300 p-2"><span className="px-2 py-1 bg-orange-300 text-white rounded m-2">#</span> {JSON.stringify(result, null, 4)}</div>
        )
    }

    const calulateSize = () => value.length >1 ? value.length * 10 : 15

    const inputText = <input className="outline-none" value={value} onChange={valueOnChange} style={{width: calulateSize()}} />


    return (
        <React.Fragment>
            <div className="relative flex flex-col border-l-4 border mx-2 border-gray-300">
                <div className="font-mono overflow-x-auto flex flex-row font-light py-2 px-3">{text(inputText)}</div>
                <div className="flex flex-row justify-between bg-gray-100">
                    <div></div>
                    <button onClick={onClickRun} className="bg-green-400 inline-flex py-2 justify-center items-center text-white px-5">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.04272 6.01904V20.019L19.0427 13.019L8.04272 6.01904Z" fill="white"/>
                        </svg>
                        <span>RUN</span>

                    </button>
                </div>
            </div>
            {result && <ResultView />}
        </React.Fragment>
    )
}

export default CodeRunner;
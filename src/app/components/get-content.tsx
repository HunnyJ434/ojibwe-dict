"use client"
import React, {useEffect, useState} from "react"

export const GetContent = (props:any) => {
    const [mainData , setMainData] = useState(props.data.EngOjib)
    const [keys, setKeys] = useState(Object.keys(mainData).sort())
    useEffect(()=> {
        if(props.dicType === "OjibEng"){
            setMainData(props.data.OjibEng)
            setKeys(Object.keys(props.data.OjibEng).sort())
        }
        else{
            setMainData(props.data.EngOjib)
            setKeys(Object.keys(props.data.EngOjib).sort())

        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.dicType])
   
    
     
     const [activeKey, setActiveKey] = useState([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1
        -1,-1,-1,-1,-1,-1,-1,-1,-1,-1
        -1,-1,-1,-1,-1,-1])
	const findNewKeys = (key:String) => {
			if (key[0] == props.value){
				return key
			}
		
	}
    
    return (
        <div className="grid gap-x-[3rem] grid-cols-3">
        {keys.filter(findNewKeys).map((item:any, key:any) => {
            // eslint-disable-next-line react/jsx-key
            return <div >
                <button className=" text-[blue]" onClick={() => {activeKey[0] == key ? setActiveKey([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]) : setActiveKey([key,-1,-1,-1,-1,-1,-1,-1,-1,-1-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1])} }>{item}</button>
                <div className={`rounded-[1.5rem] flex flex-col  w-[100%] rounded bg-[#e1e9f5] transition-all shadow-lg delay-3000 duration-3000 ease-in-out overflow-hidden ${key == activeKey[0]? "p-3 h-[10rem] " : "h-[0rem]"}`}>
                <span className="self-end cursor-pointer h-[0.3rem] relative" onClick={() => setActiveKey([])}>X</span>
                <div className="flex flex-col h-[9rem] justify-between">
                    <p className="">{item}: {mainData[item]}</p>
                    <button className="inset-x-0  top-max bottom-0">Suggest correction</button>
                </div>
                </div>
                </div>
                
        })}
        </div>
    )
}
"use client"

import LoginForm from "./login-form"
import { useState } from "react"
import {db}  from "../config/firebase-config"
import {doc, updateDoc, setDoc , deleteField} from "firebase/firestore"
import approveIcon from "../../../public/approve.jpg"
import Image from "next/image"
const GetReviewData =  (props:any) => {
    
   const [isLoggedin, setLoggedin] = useState(false)
   const [hiddenKey, setHiddenKey] = useState<any>([])
   const OjibEngkeys = Object.keys(props.EngOjibReData).sort()
   const EngOjibkeys = Object.keys(props.OjibEngReData).sort()
    const approveWord = async (key:any, contentType:any,value:any) => {
        const map1:any = new Map();
        map1.set(key, value);
        const obj = Object.fromEntries(map1);
        
        try{
			await updateDoc(doc(db, "words", contentType), obj)
            setHiddenKey( [...hiddenKey, key])
		}
		catch(err){
			console.error(err)
		}
        map1.set(key, deleteField());
        const obj1 = Object.fromEntries(map1);
        try{
			await updateDoc(doc(db, "words", contentType + "-Review"), obj1)
		}
		catch(err){
			console.error(err)
		}
    } 
    const disapproveWord = async (key:any, contentType:any,value:any) => {
        const map1:any = new Map();
        map1.set(key, deleteField());
        const obj1 = Object.fromEntries(map1);
        try{
			await updateDoc(doc(db, "words", contentType + "-Review"), obj1)
            setHiddenKey( [...hiddenKey, key])
            console.log(hiddenKey)
        }
		catch(err){
			console.error(err)
		}
    }
    return(
        isLoggedin?
        <> {OjibEngkeys.map((item:any, key:any) => {
            return (<div key={key} className={hiddenKey.includes(item)? "hidden" : "ml-3 my-1 text-[1.15rem] flex"}><div key={key}>{item}: {props.EngOjibReData[item]}</div>
                    <button className="ml-[2rem]" key={key} onClick={() => approveWord(item, "Eng-Ojib",props.EngOjibReData[item])}><Image src={approveIcon.src} width={25} height={25} alt=""></Image></button>
                    <button  onClick={() => {disapproveWord(item, "Eng-Ojib",props.EngOjibReData[item])}} className="ml-[2rem] "><p className="text-[red] font-[red]">X</p></button>
                    </div>)
                    
        } )}
        {EngOjibkeys.map((item:any, key:any) => {
            return (<div key={key} className={hiddenKey.includes(item)? "hidden" : "ml-3 my-1 text-[1.15rem] flex"}>{item}: {props.OjibEngReData[item]}
                    <button className="ml-[2rem]" key={key} onClick={() => approveWord(item, "Ojib-Eng",props.EngOjibReData[item])}><Image src={approveIcon.src} width={25} height={25} alt=""></Image></button>
                    <button  onClick={() => {disapproveWord(item, "Ojib-Eng",props.EngOjibReData[item])}} className="ml-[2rem] "><p className="text-[red] font-[red]">X</p></button>
                    </div>)
        } )}
        </>
        : <LoginForm isLoggedin={isLoggedin} setLoggedin={setLoggedin}/> 
    )
}

export default GetReviewData
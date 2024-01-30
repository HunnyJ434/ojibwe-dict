
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Content }  from './components/main-content'
import {db}  from "./config/firebase-config"
import {getDocs, addDoc, collection} from "firebase/firestore"
import './globals.css'
import { useEffect } from 'react'
const inter = Inter({ subsets: ['latin'] })

  const getData =async (value:number) => {
    try{
      const wordCollectionRef = collection(db , "words")
      const data = await getDocs(wordCollectionRef)
      return data.docs[value].data()
    }catch(err){
      console.error(err)
    }

    
  }
export default async function Home() {
  const EngOjib = await getData(0)
  const OjibEng = await getData(2)
  return (
    <main className={`${inter.className} flex min-h-screen flex-col items-center justify-between px-10`}>
      <Content EngOjib={EngOjib} OjibEng={OjibEng}/>
    </main>
  )
}

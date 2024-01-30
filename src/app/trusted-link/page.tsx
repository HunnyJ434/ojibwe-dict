
import GetReviewData from "../components/get-review-data"
import LoginForm from "../components/login-form"
import {db}  from "../config/firebase-config"
import {doc, updateDoc , collection , getDocs} from "firebase/firestore"

const getData =async (value:number) => {
    const wordCollectionRef = collection(db , "words")
   
    try{
     const data = await getDocs(wordCollectionRef)
     return data.docs[value].data() 
    }
    catch(err){
        console.error(err)
    }
      return {}
}

const Page = async () => {
    
    const mainDataEngObjibRe:any = await getData(1)
    const mainDataObjibEngRe:any = await getData(3)
    
   
    return (
        <GetReviewData EngOjibReData={mainDataEngObjibRe} OjibEngReData={mainDataObjibEngRe}/>
    )

}

export default Page
// _app.tsx
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import {db}  from "../src/app/config/firebase-config"
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

function MyApp({ Component, pageProps }: AppProps) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const EngOjib = await getData(0);
        const OjibEng = await getData(2);
        const newData = [EngOjib, OjibEng];
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      {/* Pass the data as a prop to all components */}
      <Component {...pageProps} data={data} />
    </main>
  );
}

export default MyApp;

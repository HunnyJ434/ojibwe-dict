/* eslint-disable @next/next/no-async-client-component */
"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import Translate from '../components/translate';
const Page = async () => {


  const handleClick = async (inputString:any) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/process_data', { input_string: inputString });
      const resultWords = response.data.result_string.split(' '); // Split the string into an array of words
      const Word = resultWords.length > 0 ? resultWords[0] : ''; // Get the first word
      return Word
    } catch (error:any) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Translate handleCLick={handleClick}/>
    </div>
  );
}

export default Page
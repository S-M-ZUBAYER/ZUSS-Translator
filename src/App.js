import './App.css';
import { AiOutlineCopy, AiOutlineSound } from 'react-icons/ai';
import { CiMicrophoneOn } from 'react-icons/ci';
import { useState } from 'react';
import countries from './Countries';
import BtnSpinner from './BtnSpinner';

import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [isLoading, SetIsLoading]=useState(false)
  const [targetLan, setTargetLan] = useState("")
  const [text, setText] = useState('');
  // const [engText,setEngText]=useState('')
  const [midTranslate, setMidTranslate] = useState('');
  const [targetTranslate, setTargetTranslate] = useState('');


 // create the function to collect the target language to translate
  const handleTargetLan = (event) => {
    event.preventDefault();
    setTargetLan(event.target.value)

  }
  // Create the function which show the toast if user didn't select the target language!
  const notify = () => {
    toast("Please select the target language!");
    return;
  };


  // create the function to collect the input text from the textarea to translate
  const handleToCollectText = (event) => {
    event.preventDefault();
    setText(event.target.value)

  }


  const handleToTranslate = () => {

    setMidTranslate('')
    setTargetTranslate('')
    SetIsLoading(true)
   

    setText(text.trim());

    const midInput = {
      text
    }
    const targetInput = {
      target: targetLan,
      text
    }


    // fetch the api to use post method the get the response from OpenAI
    // Here we can get the value from detect language to English language

    let apiUrlEng = `https://simple-node-server-s-m-zubayer.vercel.app/translateEng`;

    fetch(apiUrlEng, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(midInput)
    })
      .then((res) => res.json())
      .then((data) => {
        setMidTranslate(data?.data);
        // setEngText(data.data)
        SetIsLoading(false)
      });


    // fetch the api to use post method the get the response from OpenAI
    // Here we can get the value from English language to selected language

    // https://simple-node-server-s-m-zubayer.vercel.app

    let apiUrl = `https://simple-node-server-s-m-zubayer.vercel.app/translate`;
    if(!targetLan){
      notify();
    }
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(targetInput)
    })
      .then((res) => res.json())
      .then((data) => {
        setTargetTranslate(data?.data);
        SetIsLoading(false)
      });

  }




  return (


    <div className="App md:h-screen flex justify-center items-center bg-lime-300">
      <ToastContainer />
      <div className=" ">
        <h1 className="text-3xl font-bold mb-10 mt-10 md:mt-0">ZUSS Translator</h1>
        <div className=' bg-white md:flex rounded-lg p-5'>  
          <div>
            <textarea placeholder="please type here" onChange={handleToCollectText} className="border-2 border-slate-600 rounded-t-lg md:rounded-t-none md:rounded-tl-lg p-2  mt-2 md:ml-2 h-60  w-72 md:w-64 lg:w-72  block"></textarea>
            <div className="border-2 border-slate-600 md:ml-2 sm:rounded-b-lg md:rounded-b-none md:rounded-bl-lg mb-2 mr-2 md:mr-0">
              <div className="flex justify-between items-center ml-2 ">
                <AiOutlineCopy></AiOutlineCopy>
                <CiMicrophoneOn></CiMicrophoneOn>
                <AiOutlineSound></AiOutlineSound>
                <div className="form-control">
                  <div className="input-group" id='lan'>
                    <select name='language' type="boolean" placeholder='Sold Status' className="select select-bordered w-full px-2 py-2 bg-white rounded-lg  focus:outline-green-500  text-gray-900">
                      <option disabled selected> Detect language</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div>
            <div placeholder="Translation" id="mid-text" className="border-2 text-start rounded-t-lg  md:rounded-t-none border-slate-600 p-2  mt-2 h-60  w-72 md:w-64 lg:w-72 block">
              {
                isLoading ? <BtnSpinner></BtnSpinner>: midTranslate
              }
            </div>
            <div className="border-2 border-slate-600  mb-2 mr-2 md:mr-0">
              <div className="flex justify-between items-center ml-2 ">
                <AiOutlineCopy></AiOutlineCopy>
                <CiMicrophoneOn></CiMicrophoneOn>
                <AiOutlineSound></AiOutlineSound>
                <div className="form-control">
                  <div className="input-group" id='lan'>
                    <select name='language' type="boolean" placeholder='Sold Status' className="select select-bordered w-full px-3 py-2 rounded-md  focus:outline-green-500 bg-white text-gray-900">
                      <option disabled selected>English</option>

                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>



          <div>
            <div placeholder="Translation" id="to-text" className="border-2 text-start border-slate-600 rounded-t-lg md:rounded-none md:rounded-tr-lg p-2 mt-2 mr-2 h-60  w-72 md:w-64 lg:w-72 block">
            {
                isLoading ? <BtnSpinner></BtnSpinner>: targetTranslate
              }
            </div>
            <div className="border-2 border-slate-600 md:rounded-br-lg mr-2  mb-2">
              <div className="flex justify-between items-center ml-2 ">
                <AiOutlineCopy></AiOutlineCopy>
                <CiMicrophoneOn></CiMicrophoneOn>
                <AiOutlineSound></AiOutlineSound>

                {/* To create the functionalities the select language */}

                <div className="form-control" onChange={handleTargetLan}>
                  <div className="input-group" id='lan'>
                    <select name='language' type="boolean" placeholder='Sold Status' className="select select-bordered w-full px-3 py-2 rounded-md focus:outline-green-500 bg-white text-gray-900">
                      <option disabled selected> Select language</option>
                      {
                        countries?.map((element, index) => <option key={index}>{element}</option>

                        )
                      }
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>


        {/* Create the button to generate the Translation */}

        <div className="flex justify-around items-center ">
          <button className="my-5 bg-white w-full py-1 rounded-lg font-semibold" onClick={handleToTranslate} >Text Translate</button>
        </div>

      </div>
    </div>
  );
}

export default App;

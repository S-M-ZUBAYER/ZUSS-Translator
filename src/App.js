import logo from './logo.svg';
import './App.css';
import { AiOutlineCopy, AiOutlineSound } from 'react-icons/ai';
import { CiMicrophoneOn } from 'react-icons/ci';
import { useState } from 'react';
import countries from './Countries';

function App() {

  const [selectLan, setSelectLan] = useState("")
  const [targetLan, setTargetLan] = useState("")
  const [text, setText] = useState('');
  const [midTranslate, setMidTranslate] = useState('');
  const [targetTranslate, setTargetTranslate] = useState('');
  
  const toText=document.getElementById("to-text");
  const midText=document.getElementById("mid-text");


const handleTargetLan = (event) => {
    event.preventDefault();
    setTargetLan(event.target.value)

  }

  const handleToCollectText = (event) => {
    event.preventDefault();
    setText(event.target.value)

  }

  const detectLan = (event) => {
    event.preventDefault();
    setSelectLan(event.target.value)

  }
  
// console.log(targetLan)

  const handleToTranslate = () => {

toText.value="Translating"
midText.value="Translating"

 setText( text.trim());

 const midInput={
  text
        }
 const targetInput={
  target:targetLan,
  text
        }



//  let apiUrl = `http://localhost:5000/translate`;
//       fetch(apiUrl,{
//         method:"POST",
//         headers:{
//           "content-type":"application/json"
//         },
//         body:JSON.stringify(targetInput)
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           // console.log(data.data)
//           // toText.value = data.responseData.translatedText;
//           // console.log(data?.isAxiosError)
//           setTargetTranslate(data?.data);
//           // finalText.innerText = finalTranslate;
//           // // toText.value=finalTranslate;
//           // const result=document.getElementById("outPut");
//           // result.value=finalTranslate;
//           // data.matches.forEach((data) => {
//           //   if (data.id === 0) {
//           //     toText.value = data.translation;
//           //   }
//           // });
//           // toText.setAttribute("placeholder", "Translation");
//         });

        let apiUrlEng = `http://localhost:5000/translateEng`;

      fetch(apiUrlEng,{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(midInput)
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data.data)
          // toText.value = data.responseData.translatedText;
          setMidTranslate(data?.data);
          setText(data.data)
          // finalText.innerText = finalTranslate;
          // // toText.value=finalTranslate;
          // const result=document.getElementById("outPut");
          // result.value=finalTranslate;
          // data.matches.forEach((data) => {
          //   if (data.id === 0) {
          //     toText.value = data.translation;
          //   }
          // });
          // toText.setAttribute("placeholder", "Translation");
        });


        let apiUrl = `http://localhost:5000/translate`;
        fetch(apiUrl,{
          method:"POST",
          headers:{
            "content-type":"application/json"
          },
          body:JSON.stringify(targetInput)
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data.data)
            // toText.value = data.responseData.translatedText;
            // console.log(data?.isAxiosError)
            setTargetTranslate(data?.data);
            // finalText.innerText = finalTranslate;
            // // toText.value=finalTranslate;
            // const result=document.getElementById("outPut");
            // result.value=finalTranslate;
            // data.matches.forEach((data) => {
            //   if (data.id === 0) {
            //     toText.value = data.translation;
            //   }
            // });
            // toText.setAttribute("placeholder", "Translation");
          });

        console.log(midTranslate,targetTranslate)

toText.value=targetTranslate
midText.value=midTranslate

  }




  return (
    <div className="App md:h-screen flex justify-center items-center bg-lime-300">

      <div className=" ">
        <h1 className="text-3xl font-bold mb-10">ZUSS Translator</h1>
        <div className=' bg-white md:flex rounded-lg p-5'>
          <div>
            <textarea placeholder="please type here" onChange={handleToCollectText} className="border-2 border-slate-600 rounded-t-lg md:rounded-t-none md:rounded-tl-lg p-2  mt-2 md:ml-2 h-60  w-72  block"></textarea>
            <div className="border-2 border-slate-600 md:ml-2 sm:rounded-b-lg md:rounded-b-none md:rounded-bl-lg mb-2 mr-2 md:mr-0">
              <div className="flex justify-between items-center mx-2 ">
                <AiOutlineCopy></AiOutlineCopy>
                <CiMicrophoneOn></CiMicrophoneOn>
                <AiOutlineSound></AiOutlineSound>


                <div className="form-control">
                  <div className="input-group" id='lan'>
                    <select name='language' type="boolean" placeholder='Sold Status' className="select select-bordered w-full px-3 py-2 border rounded-lg border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900">
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
          <div>
            <textarea placeholder="Translation" id="mid-text"  className="border-2 rounded-t-lg  md:rounded-t-none border-slate-600 p-2  mt-2 h-60  w-72 block"></textarea>
            <div className="border-2 border-slate-600  mb-2 mr-2 md:mr-0">
              <div className="flex justify-between items-center mx-2 ">
                <AiOutlineCopy></AiOutlineCopy>
                <CiMicrophoneOn></CiMicrophoneOn>
                <AiOutlineSound></AiOutlineSound>
                <div className="form-control">
                  <div className="input-group" id='lan'>
                    <select name='language' type="boolean" placeholder='Sold Status' className="select select-bordered w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900">
                      <option disabled selected>English</option>

                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <textarea placeholder="Translation" id="to-text" className="border-2 border-slate-600 rounded-t-lg md:rounded-none md:rounded-tr-lg p-2 mt-2 mr-2 h-60  w-72 block"></textarea>
            <div className="border-2 border-slate-600 md:rounded-br-lg mr-2  mb-2">
              <div className="flex justify-between items-center mx-2 ">
                <AiOutlineCopy></AiOutlineCopy>
                <CiMicrophoneOn></CiMicrophoneOn>
                <AiOutlineSound></AiOutlineSound>
                <div className="form-control" onChange={handleTargetLan}>
                  <div className="input-group" id='lan'>
                    <select name='language' type="boolean" placeholder='Sold Status' className="select select-bordered w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900">
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
        <div className="flex justify-around items-center ">
          <button className="my-5 bg-white w-full py-1 rounded-lg font-semibold" onClick={handleToTranslate} >Text Translate</button>

        </div>

      </div>
    </div>
  );
}

export default App;

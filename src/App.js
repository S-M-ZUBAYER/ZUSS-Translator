import logo from './logo.svg';
import './App.css';
import { AiOutlineCopy, AiOutlineSound } from 'react-icons/ai';
import { CiMicrophoneOn } from 'react-icons/ci';
import { useState } from 'react';
import countries from './Countries';

function App() {

  const [selectLan, setSelectLan] = useState('')
  const [targetLan, setTargetLan] = useState('')
  const [text, setText] = useState('');



  const handleToCollectText = (event) => {
    event.preventDefault();
    setText(event.target.value)

  }

  const detectLan = (event) => {
    event.preventDefault();
    setSelectLan(event.target.value)

  }
  const handleTargetLan = (event) => {
    event.preventDefault();
    setTargetLan(event.target.value)

  }

  const handleToTranslate = () => {

  }

  console.log(selectLan, targetLan, text)


  return (
    <div className="App md:h-screen flex justify-center items-center bg-lime-300">

      <div className=" ">
        <h1 className="text-3xl font-bold mb-10">ZUSS Translator</h1>
        <div className=' bg-white md:flex rounded-lg p-5'>
          <div>
            <textarea onChange={handleToCollectText} className="border-2 border-slate-600 rounded-tl-lg p-2  mt-2 ml-2 h-60  w-72  block"></textarea>
            <div className="border-2 border-slate-600 ml-2 rounded-bl-lg mb-2">
              <div className="flex justify-between items-center mx-2 ">
                <AiOutlineCopy></AiOutlineCopy>
                <CiMicrophoneOn></CiMicrophoneOn>
                <AiOutlineSound></AiOutlineSound>


                <div className="form-control" onChange={detectLan}>
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
          <div>
            <textarea id className="border-2 border-slate-600 p-2  mt-2 h-60  w-72 block"></textarea>
            <div className="border-2 border-slate-600  mb-2">
              <div className="flex justify-between items-center mx-2 ">
                <AiOutlineCopy></AiOutlineCopy>
                <CiMicrophoneOn></CiMicrophoneOn>
                <AiOutlineSound></AiOutlineSound>
                <div className="form-control" onChange={detectLan}>
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
            <textarea className="border-2 border-slate-600 rounded-tr-lg p-2 mt-2 mr-2 h-60  w-72 block"></textarea>
            <div className="border-2 border-slate-600 rounded-br-lg mr-2  mb-2">
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

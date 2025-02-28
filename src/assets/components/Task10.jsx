import React, { useState } from 'react';
import Navbar from './Navbar';
import './tailcss.css';
import { useNavigate } from 'react-router-dom';

const Task10 = () => {
  const navigate = useNavigate();
  const [ans, setAns] = useState('');
  const [msg, setMsg] = useState('');

  const tasks = JSON.parse(import.meta.env.VITE_task11);


  const verify = () => {
    if (tasks[ans] === undefined) {
      setAns('');
      setMsg(<p className='bg-red-300 text-red-600 p-2'>Try Again</p>);
    } else {

      setMsg(<p className='bg-green-300 text-black-600 p-2'>Your Flag is {tasks[ans]}</p>)


    }

  };
  return (
    <div className='h-screen'>
      <Navbar />
      <div className='container h-full py-8' id='task10bg'>
        <h1 className=' '>Task 11</h1>

        <div className='py-16'>

          <p className='text-yellow-500 bg-blue-700 inline p-2 mt-16'>Decode me</p>

          <div className="nes-container is-rounded is-dark py-4">
            <p>- .-. . .- ... ..- .-. . .... .- -.-. -.- . .-.</p>
          </div>
          <div className='flex items-center gap-4 mt-4'>
            <input
              type="text"
              id="answer"
              value={ans}
              onChange={(e) => setAns(e.target.value)}
              className='bg-blue-500 text-white p-2'
            />
            <button
              type="button"
              className='bg-red-500 p-2 text-yellow-300'
              onClick={verify} // Fix: Pass function reference, not execute it immediately
            >
              Check
            </button>

            {msg}
          </div>
          <br /><br />
          <div className='flex items-center gap-4'>
            <a type="button" className="nes-btn is-success" href='https://forms.gle/YEcRMMWpnZTV1VrA7' target='/blank'>Submission</a>
            <button type='submit' className='nes-btn bg-red-300 text-red-700 ml-8 py-2 px-8' onClick={() => { navigate('/t12ksjks') }}>Next</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Task10
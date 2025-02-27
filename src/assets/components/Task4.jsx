import React from 'react'
import Navbar from './Navbar'
import './tailcss.css';
import { useNavigate } from 'react-router-dom';

const Task4 = () => {
  const navigate = useNavigate();

  return (
    <div className='' id='task4bg' >
      <Navbar />
      <div className='p-8'>
        <h2 className='text-md text-white'>Task 4</h2>
        <div className=' mt-4 ml-16 w-3/4'>
          <p className='nes-balloon from-left nes-pointer'>Sometimes, the next clue is hidden in plain sight<br />—just reversed.</p>

        </div>
        <p className='bg-blue-500 border-4 border-amber-600 px-2 grid justify-center text-amber-300 w-1/3 ml-16 py-4'>moc.delbmarcs.www//</p>

        <button
          type="button"
          className='bg-red-500 p-2 text-yellow-300'
          onClick={() => {
            window.open("https://forms.google.com/example-form", "_blank");
            navigate("/t5qrst");
          }}  // Call verify function correctly
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Task4
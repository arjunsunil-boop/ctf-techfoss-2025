import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
const Task15 = () => {
  const navigate = useNavigate();
  const handleDownload = () => {
    const fileUrl = '/T15-download.png'; // Replace with your actual file path
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'wrongmacca.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = () => {
    const formUrl = 'https://forms.gle/dnHxQF5JWfhVVzC97'; // Replace with Gform URL
    window.open(formUrl);
  };
  return (
    <div>
      <Navbar />
      <div className="container ">
        <img
          src='/T15-background.png'
          alt="background"
          style={{
            position: "absolute",
            top: 10,
            left: 0 ,
            width: "100%",
            height: "100%",
            objectFit: "fill",
            zIndex: -1,
            opacity: 1,
            filter : "brightness(50%)"
            
          }} />
        <br />
        <h1 className='nes-text is-disabled'>
          Task 14
        </h1>
        <br />
        <p className='nes-balloon from-left'>
          I hold secrets deep within me, but not so deep that you can't find them.
          The answer lies in what describes me.
        </p>
        <button type='button'
          className='nes-btn is-primary'
          onClick={handleDownload}
        >
          Download File
        </button>
        <br></br>
        <br></br>
        <div className='flex items-center gap-4'>
        <button type='button'
          className='nes-btn is-success'
          onClick={handleSubmit}
        >
          Submission
        </button>
        <button type='submit' className='nes-btn bg-red-300 text-red-700 ml-8 py-2 px-8' onClick={() => { navigate('/t15isjhd') }}>Next</button>
        </div>

      </div>
    </div>
  )
}

export default Task15
import React from 'react'
import Navbar from './Navbar'

const Task15 = () => {
  const handleDownload = () => {
    const fileUrl = 'public/T15-download.png'; // Replace with your actual file path
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'wrongmacca.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = () => {
    const formUrl = ''; // Replace with Gform URL
    window.open(formUrl);
  };
  return (
    <div>
      <Navbar />
      <div className="container ">
        <img
          src='public/T15-background.png'
          alt="background"
          style={{
            position: "absolute",
            top: 10,
            left: 0 ,
            width: "100%",
            height: "100%",
            objectFit: "fill",
            zIndex: -1,
            filter: "",
            opacity: 1,
          }} />
        <br />
        <h1 className='nes-text is-disabled'>
          Task 15
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
        <button type='button'
          className='nes-btn is-success'
          onClick={handleSubmit}
        >
          Submission
        </button>
      </div>
    </div>
  )
}

export default Task15
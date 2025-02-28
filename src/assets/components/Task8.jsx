import React from 'react'
import Navbar from './Navbar'

const Task15 = () => {
  const handleDownload = () => {
    const fileUrl = '/T8-download.mp3'; // Replace with your actual file path
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'nottherealme.mp3';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = () => {
    const formUrl = ''; // Replace with Gform URL
    window.open(formUrl);
  };
  return (
    <div style={{ backgroundColor: '#0000ff', height: '100vh', margin: 0, padding: 0  }}>
      <Navbar />
      <div className="container " >
        
      <img
      src='/public/T8-bg.gif'
      alt="background"
      style={{ 
        position: "absolute",
        top: 270,
        left: 310,
        width: "900px",
        height: "600px",
        objectFit: "fit",
        zIndex: 0,
        filter: "blur(1px)",
        opacity: 1,
      }} 
      />   
        <br/>
        <h1 className='nes-text is-disabled'style={{zIndex:3,position:'relative'}}>
          Task 8
        </h1>
        <br />

        <p className='nes-balloon from-left'>
          I look a lot better than I sound.
        </p>
        <br></br>
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
import React from 'react';
import Navbar from './Navbar';

const Task5 = () => {
  const handleDownload = () => {
    const fileUrl = '/public/T5_lattitude_longitude.csv'; // Replace with your actual file path
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'rainboltfromwish.csv';
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
      <div className="container">  
      <img
      src='/public/T5-map-bg.png'
      alt="background"
      style={{ 
        position: "absolute",
        top: 100,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1,
        filter: "blur(1px)",
        opacity: 0.85,
      }} 
      />    
     
        <br></br>
        <h1 color='white'>
          Task 5
        </h1>
        <br></br>
        <p className='nes-balloon from-left'>
          The coordinates whisper in rows and columns, awaiting the cartographer’s touch
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
      <div className="position-absolute bottom-0 end-0">
        <i className='nes-icon is-large star is-half'></i>
      </div>
      <div className="position-absolute bottom-0 end-0">        
        <i className='nes-icon is-large star '></i>
        <i className='nes-icon is-large star'></i>
        <i className='nes-icon is-large star'></i>
        <i className='nes-icon is-large star'></i>
        <i className='nes-icon is-large star is-half'></i>
      </div>
    </div>
  );
};

export default Task5;

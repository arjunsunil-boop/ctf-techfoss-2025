import React from 'react';
import Navbar from './Navbar';

const Task5 = () => {
  const handleDownload = () => {
    const fileUrl = '/public/T5_download.zip'; 
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'rainboltfromwish.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = () => {
    const formUrl = ''; 
    window.open(formUrl);
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <img
          src='/T5-map-bg.png'
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
        <p class="nes-badge block h-16 ">
          <span class="is-dark ">Task 15</span>
        </p>

        {/* <h1 style={{ color: 'red' }} >
          Task 15
        </h1> */}
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

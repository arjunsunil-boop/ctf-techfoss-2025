import React from 'react'
import Navbar from "./Navbar";

const Task2 = () => {
  const backgroundImageUrl = '/tron.jpg';

  return (
    <div style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center 30px', minHeight: '100vh' }}>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <br />
            <h1 style={{ color: 'cyan' }}>Task 2</h1>
            <br />
            <p className="nes-balloon from-left nes-pointer">
              Inspect closely; the layers of truth might surprise you.
            </p>
            <br />
            <a type="button" className="nes-btn is-primary" href="https://drive.google.com/file/d/1ob9wSaRXdeChmbaAKVJ48Fr4367ihRxF/view?usp=sharing" target="_blank">Download File</a>
            <br />
            <br />
            <a type="button" className="nes-btn is-success" href='' target='/blank'>Submission</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task2
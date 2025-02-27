import React, { useState } from 'react'
import Navbar from './Navbar'

const Task1 = () => {

   const image = '/bgt1.jpg'
  return (
    <div>
      <div style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        filter: 'brightness(10%)' // Adjust the brightness as needed
      }}></div>
      <Navbar />


      <div className="container">
        <br />
        <h1 style={{color:'#eeeeee'}}>Task </h1>
        <br />
        <div className="row">
          <div className="col-12 col sm-12 col md-12 col lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12">

              </div>
              <div className="col col-12">
                <p className="nes-balloon from-left nes-pointer">
                  I turn plain into strange, but 64 is my range.
                </p>

              </div>
              <div className="col col-12">

                <p style={{color:'#eeeeee'}}>dGhpc19pc195b3VyX2RlY3J5cHRlZF9mbGFn</p>

              </div>

              <div className="col col-12">

                <a href="https://www.google.com">
                  <button type="button" className="nes-btn is-primary">Submission</button>

                </a>
              </div>
            </div>
          </div>
        </div>




      </div>







    </div>
  )
}

export default Task1
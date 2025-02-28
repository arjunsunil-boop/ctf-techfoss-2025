import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

const Task1 = () => {
  const navigate = useNavigate();
  const image = '/bgt1.jpg';
  const verify=()=>{
    navigate('/t2efgh')
  }

  return (
    <div className='h-screen'>
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

      <div id='task1bg' className='h-full'>
        <div className="container">
          <br />
          <h1 style={{ color: '#eeeeee' }}>Task </h1>
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

                  {/* <p style={{ color: '#eeeeee' }} className='nes-container is-dark'></p> */}
                  <div class="nes-container is-rounded " style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                    <p style={{ color: 'white' }}>dGVjaGZvc3M8dGhpc19pc195b3VyX2RlY3J5cHRlZF9mbGFnPg==</p>
                  </div>
                </div>

                <div className="col col-12 mr-16">

                  <a href="https://www.google.com" target='/blank'>
                    <button type="button" className="nes-btn is-primary">Submission</button>

                  </a>
                  {/* <button className='bg-red-400 text-red-700 p-2 ml-4' type='button' onClick={verify()}>Next</button> */}
                </div>
              </div>
            </div>
          </div>




        </div>
      </div>







    </div>
  )
}

export default Task1
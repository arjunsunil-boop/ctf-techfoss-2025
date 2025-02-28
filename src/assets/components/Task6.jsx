import React from 'react'
import Navbar from './Navbar'


const Task6 = () => {
  const image = '/bgt6.png'
  return (
    <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <Navbar />
      <div className="container">
        <br />
        <h1>Task 5</h1>
        <br />
        <div className="row g-3">
          <div className="col col-12 col sm-12 col md-12 col lg-12 col xl-12 col-xxl-12">
            <div className="row g-1 ">
              <div className="col col-12"></div>
              <div className="col col-12">
                <p className="nes-balloon from-left nes-pointer">
                  In a cryptic dance, I move by five!!
                </p>
              </div>


            </div>
            

          </div>
        </div>
        <div className="row g-3">
          <div className="col col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5 col-xxl-5">


            <p></p>

            <div class="nes-container is-rounded is-dark">
              <p>myyux://ngg.ht/kePkIgRy</p>
            </div>


          </div>
        </div>
        <br />
        <div className="row g-3">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <a href="https://www.google.com">
              <button type="button" className="nes-btn is-primary">Submission</button>
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Task6
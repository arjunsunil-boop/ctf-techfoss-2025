import React from 'react'
import Navbar from './Navbar'

const Task14 = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <br />
        <h1>Task</h1>
        <br />
        <div className="row">
          <div className="col-12 col sm-12 col md-12 col lg-12 col xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12"></div>
              <div className="col col-12">
                <p className="nes-balloon nes-pointer">
                  Hidden in sight, but not in view—find my color, and you'll see through!!
                </p>
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
      <div style={{ position: 'fixed', bottom: '10px', left: '10px', opacity: 0.1 }}>
        <img src="./logo (1).png" alt="Description of image" className="nes-img" />
      </div>
    </div>
  )
}

export default Task14
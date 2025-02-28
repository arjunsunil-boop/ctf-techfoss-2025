import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
const Task14 = () => {
  const navigate = useNavigate();

  return (
    <div >
      <Navbar />
      <div>
      <div className="container">
        <br />
        <h1 >Task 7</h1>
        <br />
        <div className="row">
          <div className="col col-12 sm-12 col md-12 col lg-12 col xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12"></div>
              <div className="col col-12">
                <p className="nes-balloon nes-pointer">
                  Hidden in sight, but not in view — find my color, and you'll see through!!
                </p>
              </div>
              <div className='flex items-center gap-4'>
              <a type="button" className="nes-btn is-success" href='https://forms.gle/FPtbQeX4YVBgdWT68' target='/blank'>Submission</a>
              <button type='submit' className='nes-btn bg-red-300 text-red-700 ml-8 py-2 px-8' onClick={() => { navigate('/t8fghij') }}>Next</button>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'fixed', bottom: '10px', left: '10px', opacity: 0.1 }}>
        <img src="./logo.png" alt="Description of image" className="nes-img" />
      </div>
      </div>

    </div>
  )
}

export default Task14
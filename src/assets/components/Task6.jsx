import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'


const Task6 = () => {
  const image = '/bgt6.png'
  const navigate = useNavigate()

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
          <div className='flex items-center gap-4'>
            <a type="button" className="nes-btn is-primary" href='https://forms.gle/ooaq2gmeiLjRoWWt8' target='/blank'>Submission</a>
            <button type='submit' className='nes-btn bg-red-300 text-red-700 ml-8 py-2 px-8' onClick={() => { navigate('/t6uvwx') }}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task6
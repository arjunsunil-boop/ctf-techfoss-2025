import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';

const Task11 = () => {
  const backgroundImageUrl = '/rarbg.gif';
  const navigate = useNavigate();
  return (
    <div style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <br />
            <h1 style={{ color: 'white' }}>Task 12</h1>
            <br />
            <p class="nes-balloon from-left nes-pointer">
              Find the Flag in this File</p>
            <br />
            <a type="button" class="nes-btn is-primary" href="https://drive.google.com/file/d/1pLNCzURsazc7-xFfNnl7_qH4HqzzD_jo/view?usp=sharing" target="_blank">RAR File</a>
            <br />
            <br />
            <br />

            <div className='flex items-center gap-4'>
              <a type="button" className="nes-btn is-success" href='https://forms.gle/YEcRMMWpnZTV1VrA7' target='/blank'>Submission</a>

              <button type='submit' className='nes-btn bg-red-300 text-red-700 ml-8 py-2 px-8' onClick={() => { navigate('/t13mkvkd') }}>Next</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Task11
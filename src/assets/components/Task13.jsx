import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';

const Task13 = () => {
  const backgroundImageUrl = '/binarycipher.jpg';
    const navigate = useNavigate();

  return (
    <div style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <br />
            <h1 >Task 13</h1>
            <br />
            <p >b wants to be 0, while his elder brother prefers to be 1</p>
            <div class="nes-container is-rounded" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
              <p style={{ color: 'white' }}>bBBBbBbb bBBbbBbB bBBbbbBB bBBbBbbb bBBbbBBb bBBbBBBB bBBBbbBB bBBBbbBB bbBBBBbb bBBbbbBB bBBbBbbB bBBBbBbb bBBBBbbB bBbBBBBB bBBbBBbb bBBbBbbB bBBbbBBB bBBbBbbb bBBBbBbb bBBBbbBB bbBBBBBb</p>
            </div>
            <br />
            <br />
            <div className='flex items-center gap-4'>
            <a type="button" class="nes-btn is-success" href='https://forms.gle/dnHxQF5JWfhVVzC97' target='blank'>Submission</a>
            <button type='submit' className='nes-btn bg-red-300 text-red-700 ml-8 py-2 px-8' onClick={() => { navigate('/t14kjssf') }}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task13
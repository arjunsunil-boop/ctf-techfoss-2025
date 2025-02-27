import React from 'react'
import Navbar from './Navbar'

const Task11 = () => {
  const backgroundImageUrl = '/rar.jpg';

  return (
    <div style={{ backgroundImage: `url(${backgroundImageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <br />
            <h1>Task 11</h1>
            <br />
            <p class="nes-balloon from-left nes-pointer">
            Find the Flag in this File</p>
            <br />
            <a type="button" class="nes-btn is-primary" href="https://drive.google.com/file/d/1yr9Rkp8Tol0MZO9jNOP2o14dSL9FQkm_/view?usp=sharing">RAR File</a>
            <br />
            <br />
            <br />
            <a type="button" class="nes-btn is-success" href=''>Submission</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task11
import React from 'react'
import Navbar from "./Navbar";
const Task2 = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <br />
            <h1>Task 2</h1>
            <br />
            <p class="nes-balloon from-left nes-pointer">
              Sometimes, what you seek lies beneath the surface. Inspect closely; the layers of truth might surprise you.</p>
            <br />
            <a type="button" class="nes-btn is-primary" href="https://drive.google.com/file/d/1IQMUh6-FNEje5WoP7RlSU7Ql7s7e_QcW/view?usp=drive_link">Download File</a>
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

export default Task2
import React from 'react'
import Navbar from './Navbar'

const Task13 = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <br />
            <h1>Task 13</h1>
            <br />
            <p>Binary Substitution Cipher  (b=0 ,B=1)</p>
            <div class="nes-container is-rounded">
              <p>bBbbbBBb bBbbBBbb bBbbbbbB bBbbbBBB bBbBBBBB bBbbbbBB bBbbbbbB bBbBbbbb bBbBbBbb bBbBbBbB bBbBbbBb bBbbbBbB bBbbbBbb bBbBBBBB bBbbbBBB bBbbbbbB bBbbBBbB bBbbbBbB bBbBBBBB bBbbBBBB bBbbBBBb</p>
            </div>
            <br />
            <br />
            <a type="button" class="nes-btn is-success" href=''>Submission</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Task13
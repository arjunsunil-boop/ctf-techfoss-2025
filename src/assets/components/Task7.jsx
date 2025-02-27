import React, { useState } from 'react'
import Navbar from "./Navbar";

const Task7 = () => {
  const image = '/orig.gif'
  const [fruit, setFruit] = useState(
    {
      "fruits": ""
    }

  )
  const correctFruits = ["rambutan", "passionfruit", "blueberry", "durian", "avocado"];
  const fruitFlags = {
    "rambutan": "techfoss<rambutan_flag>",
    "passionfruit": "techfoss<passionfruit_flag>",
    "blueberry": "techfoss<blueberry_flag>",
    "durian": "techfoss<durian_flag>",
    "avocado": "techfoss<avocado_flag>"
  };
  const fruitHandle = (event) => {

    setFruit({ ...fruit, [event.target.name]: event.target.value })

  }

  const checkFruit = (event) => {
    event.preventDefault();
    if (fruit.fruits === "") {
      return;
    }

    const userFruits = fruit.fruits.split('\n').map(f => f.trim().toLowerCase());

    userFruits.forEach(fruit => {
      if (fruit === "") {
        alert("Please enter a valid fruit name.");
      } else if (fruitFlags[fruit]) {
        alert(`Correct! Here is your flag: ${fruitFlags[fruit]}`);
      } else {
        alert("Incorrect. Please try again.");
      }
    });

    console.log(fruit);
  }
  return (
    <div>
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

      <div className="container">
        <br />
        <h1>Task 7 </h1>
        <br />
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-5">
              <div className="col col-12">
                <p className="nes-balloon from-left nes-pointer">
                  Find the FIVE fruits I like!!
                </p>
                <div className="nes-container is-rounded" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                  <p style={{ color: 'white' }}>https://aravind-b-kumar.github.io/Hidden-Fruits-CTF/</p>
                </div>
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-10 col-xl-10 col-xxl-10">
                {/* for gap */}
              </div>
              <div className="col col-12">
                <div className="nes-container with-title is-centered">
                  <p className="title">Enter Here</p>

                  <input type="text" id="name_field" class="nes-input" name='fruits' value={fruit.fruits} onChange={fruitHandle} placeholder="fruit_name"></input>
                  <a type="button" className="nes-btn is-success" href='' style={{ marginTop: '20px' }} onClick={checkFruit}>Eat!</a>
                </div>
              </div>
              <div className="col col-12">
                <a type="button" className="nes-btn is-error" href='' style={{ marginTop: '20px' }}>Flag Submission</a>
              </div>
              <div className="col col-12"></div>
            </div>
          </div>
        </div>





      </div>
    </div>
  )
}

export default Task7
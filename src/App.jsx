import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './assets/components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Tasks from './assets/components/Tasks'
import Task1 from './assets/components/Task1'
import Task2 from './assets/components/Task2'
import Task3 from './assets/components/Task3'
import Task4 from './assets/components/Task4'
import Task5 from './assets/components/Task5'
import Task6 from './assets/components/Task6'
import Task7 from './assets/components/Task7'
import Task8 from './assets/components/Task8'
import Task9 from './assets/components/Task9'
import Task10 from './assets/components/Task10'
import Task11 from './assets/components/Task11'
import Task12 from './assets/components/Task12'
import Task13 from './assets/components/Task13'
import Task14 from './assets/components/Task14'
import Task15 from './assets/components/Task15'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/tasks" element={<Tasks/>}/>
      <Route path="/t1abcd" element={<Task1/>}/>
      <Route path="/t2efgh" element={<Task2/>}/>
      <Route path="/t3hijk" element={<Task3/>}/>
      <Route path="/t4lmnop" element={<Task4/>}/>
      <Route path="/t5qrst" element={<Task5/>}/>
      <Route path="/t6uvwx" element={<Task6/>}/>
      <Route path="/t7abcde" element={<Task7/>}/>
      <Route path="/t8fghij" element={<Task8/>}/>
      <Route path="/t9klmno" element={<Task9/>}/>
      <Route path="/t10pqrst" element={<Task10/>}/>
      <Route path="/t11hdhsj" element={<Task11/>}/>
      <Route path="/t12ksjks" element={<Task12/>}/>
      <Route path="/t13mkvkd" element={<Task13/>}/>
      <Route path="/t14kjssf" element={<Task14/>}/>
      <Route path="/t15isjhd" element={<Task15/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App

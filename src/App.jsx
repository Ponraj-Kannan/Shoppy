import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Signin from './components/Signin'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Signin />
    </>
  )
}

export default App

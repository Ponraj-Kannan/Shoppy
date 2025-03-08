import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Signin from './components/Signin/Signin'

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

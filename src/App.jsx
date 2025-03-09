import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar'
import Signin from './components/Signin'
import Signup from './components/Signup'
import PasswordReset from './components/PasswordReset';

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    {/* <BrowserRouter> */}
      <Navbar />
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

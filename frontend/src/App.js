import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './components/Form'
import Home from './components/Home'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/get-appointment" element={<Form />} />
    </Routes>
  </BrowserRouter>
  )
}

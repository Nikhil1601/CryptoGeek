import React from 'react'
import Home from "./pages/Home"
import Coins from "./pages/Coinspg"
import News from './pages/News'
import { BrowserRouter, Routes, Route } from "react-router-dom"
const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/News" element={<News />} exact />
          <Route path="/Coins" element={<Coins />} exact />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

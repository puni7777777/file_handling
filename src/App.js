import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './Firebase'
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {

  const [homeActive, setHomeActive] = useState('active');
  const [aboutActive, setAboutActive] = useState('');

  const handleHomeClick = () => {
    setHomeActive('active');
    setAboutActive('');
    // console.log("home")
  };

  const handleAboutClick = () => {
    setHomeActive('');
    setAboutActive('active');
    // console.log("about")
  };

  return (
    <BrowserRouter>
      <>
        <Navbar title="TextHandle" home_active={homeActive}
          about_active={aboutActive}
          onHomeClick={handleHomeClick} onAboutClick={handleAboutClick} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;

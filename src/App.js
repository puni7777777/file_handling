import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App(props) {

  const [homeActive, setHomeActive] = useState('active');
  const [aboutActive, setAboutActive] = useState('');

  const handleHomeClick = () => {
    setHomeActive('active');
    setAboutActive('');
    console.log("home")
  };

  const handleAboutClick = () => {
    setHomeActive('');
    setAboutActive('active');
    console.log("about")
  };

  return (
    <>
      <Navbar title="TextHandle" home_active={homeActive}
        about_active={aboutActive}
        onHomeClick={handleHomeClick} onAboutClick={handleAboutClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

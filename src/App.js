import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import './Firebase'
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <Navbar title="TextHandle" />
    </>
  );
}

export default App;

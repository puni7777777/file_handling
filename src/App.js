// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';


function App(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

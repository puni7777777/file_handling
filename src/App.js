// import logo from './logo.svg';
// import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Textinput from './components/Textinput';
import Footer from './components/Footer';
import Search from './components/Search';


function App(props) {
  return (
    <>
      <Navbar title="TextHandle" />
      {/* <Search /> */}
      {/* <Login /> */}
      <div className='container my-3'>
        <Textinput heading="Enter text to change" />
      </div>
      <Footer />
    </>
  );
}

export default App;

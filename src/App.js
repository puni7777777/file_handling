// import logo from './logo.svg';
// import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Textinput from './components/Textinput';
import Footer from './components/Footer';
import Search from './components/Search';
import ContactUs from './components/Contact';


function App(props) {
  return (
    <>
      <Navbar title="TextHandle" />
      {/* <Search /> */}
      {/* <Login /> */}
      <div className='container my-3'>
        <Textinput heading="Enter text to change" />
      </div>
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;

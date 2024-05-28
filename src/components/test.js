import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import About from './About';
import ContactUs from './Contact';

export default function Navbar(props) {

    // const [homeClass, setHomeClass] = useState(`nav-link active`)
    // const [aboutClass, setAboutClass] = useState(`nav-link`)
    // const [contactClass, setContactClass] = useState(`nav-link`)

    const handleSearch = (searchValue) => {
        console.log("Search value:", searchValue)
    }

    console.log(props.about_active)

    // const changeStyleHome = () => {
    //     setHomeClass(`nav-link active`);
    //     setAboutClass(`nav-link`)
    //     setContactClass(`nav-link`)
    // };

    // const changeStyleAbout = () => {
    //     setHomeClass(`nav-link`);
    //     setAboutClass(`nav-link active`)
    //     setContactClass(`nav-link`)
    // };

    // const changeStyleContact = () => {
    //     setHomeClass(`nav-link`);
    //     setAboutClass(`nav-link`)
    //     setContactClass(`nav-link active`)
    //     console.log('contact is clicked')
    // };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary position-sticky fixed-top" style={{ zIndex: 50 }}>
                <div className="container-fluid">
                    <a href='/texthandle' className="navbar-brand">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href='texthandle' className='nav-link' aria-current="page" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a href='about' className='nav-link' >About</a>
                            </li>
                            <li className="nav-item">
                                <a href='contact' className='nav-link' >Contact me</a>
                            </li>
                            {/* <li className="nav-item">
                            <Search onSearch={handleSearch} />
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/texthandle" exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<ContactUs />} />
            </Routes>
        </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home_active: PropTypes.string.isRequired,
    about_active: PropTypes.string.isRequired,
    onHomeClick: PropTypes.func.isRequired,
    onAboutClick: PropTypes.func.isRequired,
}

Navbar.defaultProps = {
    title: "Add title here",
    home_active: "",
    about_active: "",
}
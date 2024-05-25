import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import About from './About';

export default function Navbar(props) {

    const handleSearch = (searchValue) => {
        console.log("Search value:", searchValue)
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ zIndex: 50 }}>
                <div className="container-fluid">
                    <a href='/texthandle' className="navbar-brand">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href='/texthandle' className={`nav-link ${props.home_active}`} aria-current="page" >Home</a>
                            </li>
                            <li className="nav-item">
                                <a href='about' className={`nav-link ${props.about_active}`} >About</a>
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
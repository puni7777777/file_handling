import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ zIndex: 50 }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className={`nav-link ${props.home_active}`} aria-current="page" onClick={props.onHomeClick}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className={`nav-link ${props.about_active}`} onClick={props.onAboutClick}>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
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
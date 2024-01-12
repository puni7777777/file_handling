import React, { useState } from 'react'
import PropTypes from 'prop-types';

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
                            <a className={'nav-link ' + props.home_active} aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={'nav-link ' + props.about_active} href="/about">About</a>
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
}

Navbar.defaultProps = {
    title: "Add title here",
    home_active: "",
    about_active: "",
}
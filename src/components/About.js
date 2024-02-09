import React from 'react'
import Navbar from './Navbar'
import './about.css'

function About() {
    return (
        <>
            <div className='para'>
                <p align='justify'>This is a text manipulation tool.
                    Welcome to <i>TEXTHANDLE</i>, where words come to life with a
                    touch of transformation! Our innovative text handling website is
                    designed to empower your words, offering a myriad of features that
                    elevate your textual content in ways that are both functional and creative.
                    Whether you're a professional writer, a student working on an assignment, or
                    simply someone who enjoys playing with language, <i>TEXTHANDLE</i> is the
                    perfect platform for you.
                </p>
                <h2 align='center'><b>HOW IT WORKS</b></h2>
                <p align='center'>    <b>Input Your Text:</b> Simply enter or paste your text into
                    our user-friendly interface.<br />
                    <b>Choose Your Transformation:</b> Explore our range of transformation options
                    and select the one that best suits your needs.<br />
                    <b>Enjoy the Result:</b> Witness your text undergo a magical transformation right
                    before your eyes. Preview and make adjustments until you're satisfied.<br />
                </p>
                <p align='center'>NOTE: Please contact Me for any queries and suggestions.</p>
            </div>
        </>
    )
}

export default About; 

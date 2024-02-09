import React from 'react'
import Navbar from './Navbar'
import Textinput from './Textinput'
import ContactUs from './Contact'
import Footer from './Footer'


function Home() {
    return (
        <>
            {/* <Search /> */}
            {/* <Login /> */}
            <Textinput heading="Enter text to change" />
            <ContactUs />
            <Footer />
        </>
    )
}

export default Home;

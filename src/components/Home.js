import React from 'react'
import Navbar from './Navbar'
import Textinput from './Textinput'
import ContactUs from './Contact'
import Footer from './Footer'


export default function Home() {
    return (
        <>
            <Navbar title="TextHandle" home_active='active'/>
            {/* <Search /> */}
            {/* <Login /> */}
            <Textinput heading="Enter text to change" />
            <ContactUs />
            <Footer />
        </>
    )
}

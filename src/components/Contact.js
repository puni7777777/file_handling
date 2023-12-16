import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <div className='d-flex justify-content-center p-4'>
                <h3>Contact Me</h3>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div className='row px-5 gap-3'>
                    <div className='d-flex justify-content-start gap-3'>
                        <label>Name</label>
                        <input type="text" name="user_name" className='form-control' />
                    </div>
                    <div className='d-flex justify-content-start gap-3'>
                        <label>Email</label>
                        <input type="email" name="user_email" className='form-control' />
                    </div>
                    <div className='d-flex justify-content-start gap-3'>
                        <label>Message</label>
                        <textarea name="message" className='form-control' />
                    </div>
                    <div className='d-flex justify-content-center align-center mw-100'>
                        <input type="submit" value="Send" className='btn btn-primary w-25' />
                    </div>
                </div>
            </form>
        </div>
    );
};

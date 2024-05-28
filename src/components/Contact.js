import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
    const [sent, setSent] = useState('Send')
    const [disabling, setDisabling] = useState(true)
    const [user, setUser] = useState('');
    const [mail, setMail] = useState('');
    const [userMsg, setUserMsg] = useState('');

    const userChange = event => { setUser(event.target.value); };  //if one event handler then all the inputs follow the same message
    const mailChange = event => { setMail(event.target.value); };
    const msgChange = event => { setUserMsg(event.target.value); };

    const sendEmail = (e) => {
        e.preventDefault();

        let name1 = document.getElementById('from_name');
        let mail1 = document.getElementById('reply_to');
        let msg1 = document.getElementById('message');
        if (name1.value === '') {
            alert('please fill the Name section')
        } if (mail1.value === '') {
            alert('please fill the Name section')
        } if (msg1.value === '') {
            alert('please fill the Name section')
        }
        else {
            emailjs.sendForm('service_027qzjq', 'template_xw74ook', 'form', 'IQrBik6qWPSKopwkF')
                .then((result) => {
                    setSent('Sent');
                    setDisabling((prevEnabled) => !prevEnabled);
                    setUser('');
                    setMail('');
                    setUserMsg('');
                }, (error) => {
                    setSent(error.text);
                });
        }
    };

    return (
        <div className='vh-100 d-flex justify-content-center flex-column'>
            <div className='d-flex justify-content-center p-4'>
                <h3>Contact Me</h3>
            </div>

            {/* <form action="?" method="POST">
                <div className="g-recaptcha" data-sitekey="your_site_key"></div>
                <br />
                <input type="submit" value="Submit" />
            </form> */}

            <div className='d-flex justify-content-center'>
                <form id="form" className='mw-50'>
                    <div className='row px-5 gap-3'>
                        <div className="d-flex justify-content-start gap-3 flex-wrap">
                            <label htmlFor="from_name">Name*</label>
                            <input type="text" name="from_name" id="from_name" className='form-control' onChange={userChange}
                                value={user} required />
                        </div>
                        <div className="d-flex justify-content-start gap-3 flex-wrap">
                            <label htmlFor="reply_to">E-mail*</label>
                            <input type="text" name="reply_to" id="reply_to" className='form-control' onChange={mailChange}
                                value={mail} required />
                        </div>
                        <div className="d-flex justify-content-start gap-3 flex-wrap">
                            <label htmlFor="message">Message*</label>
                            <input type="text" name="message" id="message" className='form-control' onChange={msgChange}
                                value={userMsg} required />
                        </div>
                        <div className='d-flex justify-content-center align-center mw-100' >
                            <input type="submit" value={sent} className='btn btn-primary w-25' id='button' onClick={sendEmail} disabled={!disabling} />
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};

import React from 'react'
import Card from './Card';

export default function Contact() {
    const Submit = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        //SubmitEmail(e)

    }
    const url = require("../photos/backflip.jpg");
    return (
        <div className='container'>
            <Card url={url} />
            <div className='form_view' id="form">
                <form method="post" onSubmit={Submit}>
                    <p className='contact_title_txt'>Contact</p>
                    <input placeholder='Name' name='name' required />
                    <input placeholder='Subject' name='subject' required />
                    <input placeholder='Email' name='email' type='email' />
                    <input placeholder='Phone' name='phone' type='tel' />
                    <textarea placeholder='Message' name='message' required className='message_box' />
                    <input type='submit' className='submit_btn' value='Submit' title='Submit' />
                </form>
            </div>
        </div>
    )
}



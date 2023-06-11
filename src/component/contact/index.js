import React from "react";
import './contact.style.scss'

export default function Contact() {
    return (
        <form>
            <div className='contact__page'>
                <p className='contact_title'>SUBSCRIBE NEWSLETTER</p>
                <p className='contact_title2'>Get -15% off your first offer</p>
                <input className='contact-input' type='email' required placeholder='Enter your email'/>
                <button type='submit' className='contact_submit'>SUBMIT</button>
            </div>
        </form>
    )
}
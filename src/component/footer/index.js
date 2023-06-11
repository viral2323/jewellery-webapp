import React, {useState} from "react";
import './footer.style.scss'
import '@fortawesome/fontawesome-free/css/all.css';
import Accordian from "../accordian";
import {footerData} from './footer'

export default function Footer() {
    return (
        <>
            <div style={{backgroundColor: '#f5f4f0'}}>
                <div className='footer__description'>
                    <div className='description_text'>
                        <h1 className="brand_name">Jewelry</h1>
                    </div>
                    <p className="description_text">RETURNS WORLDWIDE</p>
                    <p className="description_text">SHIPPING WORLDWIDE</p>
                    <p className="description_text">100% SAFE & SECURE</p>
                </div>
                {<Accordian data={footerData} isFilter={false} handleFilter={() => {}}/>}
                <div className='footer_copyright'>
                    <p className='copyright'>&copy; 2022 THEME POWERED BY VS CODERS</p>
                    <p className='madeby'>MADE BY <span>VS Coders</span></p>
                </div>
            </div>
        </>
    )
}
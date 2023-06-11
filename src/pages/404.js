import React from "react";
import '../Styles/common.style.scss'
import {useNavigate} from "react-router-dom";

export default function Error404(){
    const navigate = useNavigate()
    return (
        <>
            <div className='error_page'>
                <img className='img' src='https://cdn.shopify.com/s/files/1/0605/4785/8664/files/404.png?v=1637125074'/>
                <div className='error_redirect_button'>
                    <button onClick={() => navigate(-1)} className='error_button'>Go Back</button>
                    <button onClick={() => navigate('/')} className='error_button'>Home Page</button>
                </div>
            </div>
        </>
    )
}
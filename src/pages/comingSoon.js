import React from "react";
import {useNavigate} from "react-router-dom";
export default function ComingSoon(){
    const navigate = useNavigate()

    return(
        <>
            <div className='coming_page'>
                <h1 className='text'>This page is Under Construction</h1>
                <h3 className='text_small'>We will inform you shortly!</h3>
                <div className='error_redirect_button'>
                    <button onClick={() => navigate(-1)} className='error_button'>Go Back</button>
                    <button onClick={() => navigate('/')} className='error_button'>Home Page</button>
                </div>
            </div>
        </>
    )
}
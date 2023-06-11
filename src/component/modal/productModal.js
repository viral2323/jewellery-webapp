import React from "react";
import './productModal.style.scss'

export default function ProductModal(props){
    return(
        <>
            <div className='modal-wrapper' onClick={() => props.onClose()}>
                <img className='large-image'  src={props.url}/>
            </div>
        </>
    )
}
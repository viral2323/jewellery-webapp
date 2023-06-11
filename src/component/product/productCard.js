import React, {useState} from "react";
import './product.style.scss'
import viewIcon from '../../assets/view.png'
import heartIcon from '../../assets/heart.png'
import colorHeartIcon from '../../assets/color-heart.png'
import {createPortal} from "react-dom";
import ProductModal from "../modal/productModal";

export default function ProductCard(props) {
    const [isLike, setIsLike] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [modalUrl, setModalUrl] = useState('')

    const changeLike = () => {
        setIsLike(!isLike)
    }
    const handleModal = (url) => {
        setShowModal(!showModal)
        setModalUrl(url)
        const ele = document.getElementById('show-modal');
        ele.classList.toggle('modal-active')
    }
    return (
        <>
            {props.isGrid && <div className="product_vertical">
                <picture className='picture_container'>
                    <img className="product_img"
                         src={props.item.productImages[0].link}/>
                </picture>
                <div className="product_description">
                    <p className="product_title">Diamond RIng</p>
                    <p className="product_price">Price</p>
                    <div className="product_button">
                        <button className="product_like" onClick={changeLike}><img className='card_icon' width={24}
                                                                                   height={24}
                                                                                   src={isLike ? colorHeartIcon : heartIcon}/>
                        </button>
                        <button className="product_cart">Add to cart</button>
                        <button className="product_view" onClick={() => handleModal(props.item.productImages[0].link)}><img className='card_icon' width={24} height={24}
                                                              src={viewIcon}/></button>
                    </div>
                </div>
            </div>}
            {!props.isGrid && <div className="product_grid_horizontal">
                <div className='image_wrapper'>
                <img className="product_img"
                     src={props.item.productImages[0].link}/>
                </div>
                <div className='product_grid_description'>
                    <div  className='product_metadata'>
                    <p className="product_title">Diamond RIng</p>
                    <p className="product_price">Price</p>
                    <p className='product_description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio
                        amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
                    </div>
                    <div className="product_grid_button">
                        <button className='product_grid_like'><img className='card_icon' width={24}
                                                                   height={24}
                                                                   src={isLike ? colorHeartIcon : heartIcon}/></button>
                        <button className='product_grid_cart'>Add to cart</button>
                        <button className='product_grid_view' onClick={() => handleModal(props.item.productImages[0].link)}><img className='card_icon' width={24} height={24}
                                                                   src={viewIcon}/></button>
                    </div>
                </div>
            </div>}
            {showModal && createPortal(
                <ProductModal onClose={handleModal} url={modalUrl} />,
               document.getElementById('show-modal')
            )}
        </>
    )
}
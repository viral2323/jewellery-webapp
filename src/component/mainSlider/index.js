import React, {useEffect, useState} from "react";
import './slider.style.scss'
import Slider from "react-slick";
import slider1 from '../../assets/slider-01.webp'
import slider2 from '../../assets/slider-02.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useNavigate} from "react-router-dom";
function CustomSlider(props) {
    const navigate = useNavigate()
    const handleRedirect = () => {
        navigate('products')
    }
    return (
        <div className='custom__slider'>
            <div className='slider__image'>
                <img src={props.img}/>
            </div>
            <div className='slider__content'>
                <p className='slider__text'>PERSONALIZED JEWELRY</p>
                <h2 className={`slider__header ${props.activeSlide == props.number ? props.names : ''}`}>Happiness comes in the box of jewelry</h2>
                <button className='slider__button' onClick={handleRedirect}>SHOP COLLECTION</button>
            </div>
        </div>
    )
}

function CustomButton(props){
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none"}}
            onClick={onClick}
        />
    );
}

export default function MainSlider() {
    const [activeSlide, setActiveSlide] = useState(0)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomButton/>,
        prevArrow: <CustomButton/>,
        afterChange: current => setActiveSlide( current),
    };
    return (
        <Slider {...settings}>
            <CustomSlider img={slider1} activeSlide={activeSlide} number='0' names='first'/>
            <CustomSlider img={slider2} activeSlide={activeSlide} number='1' names='second'/>
        </Slider>
    )
}

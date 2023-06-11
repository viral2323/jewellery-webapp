import React, {useEffect, useState} from "react";
import './productSlider.style.scss'
import Slider from "react-slick";
import slider1 from '../../assets/icon-01.avif'
import slider2 from '../../assets/icon-02.webp'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomSlider(props) {
    return (
        <div className='product__slider__wrapper'>
            <div className='product__slider'>
                <img src={props.img}/>
                <p className='product_slider-text'>{props.title}</p>
                <button className='product_slider_button'>COLLECTION</button>
            </div>
        </div>
    )
}

function CustomButton(props) {
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{...style, display: "none"}}
            onClick={onClick}
        />
    );
}

export default function ProductSlider() {
    const [activeSlide, setActiveSlide] = useState(null)
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <CustomButton/>,
        prevArrow: <CustomButton/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='product_slider_title'>
                <p className='slider_title'>EXCITING CONFIDENT JEWELRY</p>
                <p className='slider_title2'>Choose your own</p>
            </div>
            <div className='product__slider__container'>
                <Slider {...settings}>
                    <CustomSlider img={slider1} title='Rings'/>
                    <CustomSlider img={slider2} title='Errings'/>
                    <CustomSlider img={slider2} title='Pendent'/>
                    <CustomSlider img={slider2} title='Bracelet'/>
                    <CustomSlider img={slider2} title='Bracelet'/>
                    <CustomSlider img={slider2} title='Bracelet'/>
                </Slider>
            </div>
        </>
    )
}

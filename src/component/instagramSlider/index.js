import React, {useEffect, useState} from "react";
import './instaSlider.style.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstaIcon from '../../assets/instagram.svg'
function CustomSlider(props) {
    return (
        <div className='insta__slider__wrapper'>
            <div className='insta__slider'>

                <a className='insta_link' href={props.link}>
                    <img className='insta_image' src={props.img}/>
                    <div className='icon'>
                    <img className='insta_icon' src={InstaIcon}/>
                    </div>
                </a>
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

export default function InstaSlider() {
    const [activeSlide, setActiveSlide] = useState(null)

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        swipeToSlide: true,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <CustomButton/>,
        prevArrow: <CustomButton/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='insta_slider_title'>
                <p className='slider_title'>Jewelry@instagram</p>
            </div>
            <div className='insta__slider__container'>
                <Slider {...settings}>
                    <CustomSlider img={"https://cdn.shopify.com/s/files/1/0605/4785/8664/files/insta-01.jpg?v=1635599379"} link='Rings'/>
                    <CustomSlider img={'https://cdn.shopify.com/s/files/1/0605/4785/8664/files/insta-04.jpg?v=1635599379'} link='Errings'/>
                    <CustomSlider img={"https://cdn.shopify.com/s/files/1/0605/4785/8664/files/insta-01.jpg?v=1635599379"} link='Pendent'/>
                    <CustomSlider img={'https://cdn.shopify.com/s/files/1/0605/4785/8664/files/insta-04.jpg?v=1635599379'} link='Chain'/>
                    <CustomSlider img={"https://cdn.shopify.com/s/files/1/0605/4785/8664/files/insta-01.jpg?v=1635599379"} link='Buti'/>
                    <CustomSlider img={'https://cdn.shopify.com/s/files/1/0605/4785/8664/files/insta-04.jpg?v=1635599379'} link='Watch'/>
                </Slider>
            </div>
        </>
    )
}

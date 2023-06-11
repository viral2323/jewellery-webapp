import React from "react";
import MainSlider from "../component/mainSlider";
import ProductSlider from "../component/productSlider";
import Contact from "../component/contact";
import InstaSlider from "../component/instagramSlider";

export default function Home(){
    return(
        <>
            <MainSlider/>
            <ProductSlider/>
            <Contact/>
            <InstaSlider/>
        </>
    )
}
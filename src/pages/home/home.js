import React from 'react';
import NavBar from "../../components/nav-bar/nav-bar";

import "./home.css"
import ImageBanner from "../../components/banner/image-banner/image-banner";

export default class HomePage extends React.Component
{
    render() {
        return (
            <>
                <NavBar/>
                <ImageBanner img={"https://htmlcolorcodes.com/assets/images/html-color-codes-color-tutorials-hero-00e10b1f.jpg"} height={"1000px"} imgPositionY={0}/>
            </>
        )
    }
}
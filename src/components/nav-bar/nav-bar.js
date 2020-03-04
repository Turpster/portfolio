import React from "react";
import "./nav-bar.css"

import Banner from "../banner/banner";
import Heading from "../text/heading/heading";
import Button from "../button/button";
import FlexWidthContainer from "../container/flex-width-container/flex-width-container";
import FlexContainer from "../container/flex-container/flex-container";

import Text from '../text/text'

import Typed from 'typed.js';
import Subtitle from "../text/subtitle/subtitle";

export default class NavBar extends React.Component
{
    render() {
        return (
            <div className={"nav-bar"}>
                <Banner backgroundColor={"rgba(0, 0, 0, 0.7)"} color={"white"}>
                    <FlexWidthContainer>
                        <FlexContainer>
                            <Button onClick={this.HomeClick}>Home</Button>
                            <Button onClick={this.AboutClick}>About</Button>
                            <Button onClick={this.ContactClick}>Contact</Button>
                        </FlexContainer>
                        <FlexContainer align={FlexContainer.Alignment.Right} flexDirection={FlexContainer.Direction.Column}>
                            <Heading level={1} align={Text.Alignment.Right}>Turpster</Heading>
                            <Subtitle align={Text.Alignment.Right}><span id={"username-title"}/></Subtitle>
                        </FlexContainer>
                    </FlexWidthContainer>
                </Banner>
            </div>
        )
    }

    constructor(props) {
        super(props);

        this.handleLoad = this.handleLoad.bind(this);

    }

    componentDidMount() {
        window.addEventListener('load', this.handleLoad)
    }

    handleLoad()
    {
        new Typed('#username-title', {
            strings: ['Games Developer', 'Software Developer', 'Software Engineer'],
            typeSpeed: 25,
            startDelay: 20,
            cursorChar: '|',
            backSpeed: 40,
            backDelay: 700,
            onComplete(self) {
                self.cursor.remove();
            }
        })
    }

    HomeClick = () => {
        console.log("Home Clicked.");
    };

    AboutClick = () => {
        console.log("About Clicked.");
    };

    ContactClick = () => {
        console.log("Contact Clicked.");
    };
}
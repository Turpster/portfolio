import React from 'react';
import WidthContainer from "../../width-container/width-container";
import Banner from "../../banner/banner";
import Button from "./button";
import Heading from "../../text/heading/heading";
import Paragraph from "../../text/paragraph/paragraph";

export default class ButtonPreview extends React.Component
{
    bannerRef;

    constructor(props) {
        super(props);
        this.state = {
            hidden: false
        };
    }

    render() {
        this.bannerRef =  React.createRef();
        return (
                <Banner ref={this.bannerRef} style={this.state.hidden ? {display: "none"} : ""}>
                    <WidthContainer>
                    <Heading level={1}>Cookies</Heading>
                    <Paragraph>
                        We store cookies on your web browser.
                    </Paragraph>
                        <Button theme="light" onClick={() => {this.setState({hidden: true})}}/>
                    </WidthContainer>
                </Banner>
        )
    }
}
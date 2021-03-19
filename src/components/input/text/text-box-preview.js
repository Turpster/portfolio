import React from 'react';
import WidthContainer from "../../width-container/width-container";
import Banner from "../../banner/banner";
import TextBox from "./text-box";
import Heading from "../../text/heading/heading";
import Paragraph from "../../text/paragraph/paragraph";

export default class TextBoxPreview extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            hidden: false
        };
    }

    render() {
        return (
          <WidthContainer>
                    <Heading level={1}>Contact Us</Heading>

                    <Paragraph>
                        We store cookies on your web browser.
                    </Paragraph>
                    <TextBox theme="dark"/>
          </WidthContainer>
        )
    }
}

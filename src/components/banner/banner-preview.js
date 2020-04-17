import React from 'react';
import Banner from "./banner";
import Paragraph from "../text/paragraph/paragraph";
import WidthContainer from "../width-container/width-container";
import Heading from "../text/heading/heading";

export default class BannerPreview extends React.Component
{
    render() {
        return (

                <Banner>
                    <WidthContainer>
                        <Heading level={2}>
                            Banner Preview
                        </Heading>
                        <Paragraph>
                            asdasdasdasd
                        </Paragraph>
                    </WidthContainer>
                </Banner>
        )
    }
}
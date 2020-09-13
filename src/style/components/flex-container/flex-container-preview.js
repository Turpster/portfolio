import React from 'react'
import WidthContainer from "../width-container/width-container";
import FlexContainer from "./flex-container";
import Heading from "../text/heading/heading";
import Banner from "../banner/banner";

export default class FlexContainerPreview extends React.Component
{
    render() {
        return (
            <Banner>
                <WidthContainer>
                    <FlexContainer>
                        <Heading level={1}>Heading 1</Heading>
                        <Heading level={2}>Heading 2</Heading>
                        <Heading level={3}>Heading 3</Heading>
                        <Heading level={4}>Heading 4</Heading>
                        <Heading level={5}>Heading 5</Heading>
                        <Heading level={6}>Heading 6</Heading>
                    </FlexContainer>
                </WidthContainer>
            </Banner>
        )
    }
}
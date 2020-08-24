import React from 'react';
import Jumbotron from "./jumbotron";
import Heading from "../text/heading/heading";
import Paragraph from "../text/paragraph/paragraph";

export default class JumbotronPreview extends React.Component
{
    render() {
        return (
            <Jumbotron img={"https://coresites-cdn-adm.imgix.net/sidewalk/wp-content/uploads/2014/04/Kickflip-Sequence-6.jpg?fit=crop"}>
                <Heading level={1}>Jumbotron</Heading>
                <Paragraph>
                    This is an example of a Jumbotron, it has a padding of around 50px.
                </Paragraph>
            </Jumbotron>
        );
    }
}
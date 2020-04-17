import React from 'react'
import WidthContainer from "../width-container/width-container";
import Banner from "../banner/banner";

import GithubIcon from '../../assets/icons/github.svg'
import ImageList from "./image-list";

export default class ImageListPreview extends React.Component
{
    render() {
        let image = [
            {
                src: GithubIcon,
                height: "50px"
            },
            {
                src: GithubIcon,
                height: "50px"
            },
        ];

        return (
            <Banner>
                <WidthContainer>
                    <ImageList images={image}/>
                </WidthContainer>
            </Banner>
        )
    }
}
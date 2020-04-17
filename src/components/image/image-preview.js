import React from 'react'
import WidthContainer from "../width-container/width-container";
import Image from "./image";
import Banner from "../banner/banner";

import GithubIcon from '../../assets/icons/github.svg'

export default class ImagePreview extends React.Component
{
    render() {
        return (
            <Banner>
                <WidthContainer>
                    <Image src={GithubIcon} height={"50px"}/>
                </WidthContainer>
            </Banner>
        )
    }
}
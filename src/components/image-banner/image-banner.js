import React from "react";
import "./image-banner.css"
import PropTypes from "prop-types";
import Banner from "../banner/banner";

export default class ImageBanner extends React.Component
{
    static propTypes = {
        widthContain: PropTypes.bool,
        img: PropTypes.string.isRequired
    };

    static defaultProps = {
        widthContain: true,
        img: undefined
    };

    render() {
        return (
            <Banner widthContain={this.props.widthContain} img={this.props.img}>
                {this.props.children}
            </Banner>
        )
    }
}
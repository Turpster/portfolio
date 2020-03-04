import React from "react";
import "../banner.css"
import PropTypes from "prop-types";
import Banner from "../banner";

export default class ImageBanner extends React.Component
{
    static propTypes = {
        ...Banner.propTypes,
        img: PropTypes.string.isRequired,
        imgPositionY: PropTypes.number
    };

    static defaultProps = {
        ...Banner.defaultProps,
        img: undefined,
        imgPositionY: undefined
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"banner"} style={{
                "backgroundImage": "url('" + this.props.img + "')",
                "backgroundPositionY": -this.props.imgPositionY,
                "backgroundColor": this.props.backgroundColor,
                "color": this.props.color,
                "height": this.props.height}}>
                {this.props.children}
            </div>
        )
    }
}
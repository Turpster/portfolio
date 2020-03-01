import React from "react";
import "./banner.css"

import PropTypes from 'prop-types'

import WidthContainer from "../width-container/width-container";

export default class Banner extends React.Component
{
    static propTypes = {
        widthContain: PropTypes.bool,
        img: PropTypes.string,
        backgroundColor: PropTypes.string,
        color: PropTypes.string
    };

    static defaultProps = {
        widthContain: true,
        img: undefined,
        backgroundColor: undefined,
        color: undefined
    };

    constructor(props) {
        super(props);

        if (this.props.img)
        {
            this.img = "url(\"" + this.props.img + "\")"

            if (this.props.backgroundColor)
            {
                throw new Error("Cannot have background color and background image at the same time")
            }
        }

        this.children = this.props.widthContain ?
            <WidthContainer>
                {this.props.children}
            </WidthContainer>
            :
            this.props.children;
    }

    render() {
        return (
            <div className={"banner"} style={{'backgroundImage': this.img, 'backgroundColor': this.props.backgroundColor, 'color': this.props.color}}>
                {this.children}
            </div>
        )
    }
}
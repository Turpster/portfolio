import React from "react";
import "./banner.css"

import PropTypes from 'prop-types'

import WidthContainer from "../width-container/width-container";

export default class Banner extends React.Component
{
    static propTypes = {
        widthContain: PropTypes.bool,
        img: PropTypes.string
    };

    static defaultProps = {
        widthContain: true,
        img: undefined
    };

    constructor(props) {
        super(props);

        if (this.props.img)
        {
            this.img = "url(\"" + this.props.img + "\")"
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
            <div className={"banner"} style={{'backgroundImage': this.img}}>
                {this.children}
            </div>
        )
    }
}
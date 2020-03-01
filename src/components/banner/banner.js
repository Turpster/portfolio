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

        this.children = this.props.widthContain ?
            <WidthContainer>
                {this.props.children}
            </WidthContainer>
            :
            this.props.children;
    }

    render() {
        return (
            <div className={"banner"} style={{'background-image': 'url("' + this.props.img + '"'}}>
                {this.children}
            </div>
        )
    }
}
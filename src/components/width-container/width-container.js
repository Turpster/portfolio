import React from "react";
import "./width-container.css"

import PropTypes from 'prop-types'

export default class WidthContainer extends React.Component
{
    static propTypes = {
        margin: PropTypes.bool
    };

    static defaultProps = {
        margin: true
    };

    render() {
        return (
            <div className={"width-container"} style={ this.props.margin ? {} : {"margin": "0"}}>
                {this.props.children}
            </div>
        )
    }
}
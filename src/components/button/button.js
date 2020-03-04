import React from "react";
import "./button.css"

import PropTypes from 'prop-types'

export default class Button extends React.Component
{
    static propTypes = {
        onClick: PropTypes.func
    };

    static defaultProps = {
        onClick: undefined
    };

    render() {
        return (
            <input type={"button"} className={"button"} value={this.props.children} onClick={this.props.onClick}/>
        )
    }
}
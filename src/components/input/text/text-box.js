import React from 'react';
import PropTypes from 'prop-types';

import "../input.css"
import "./input-box.css"

export default class TextBox extends React.Component
{
    static propTypes = {
        theme: PropTypes.string,
        onClick: PropTypes.func.isRequired,
        height: PropTypes.number
    };

    static defaultProps = {
        theme: "dark",
        children: "Please enter...",
        height: 1
    }

    render() {
        return <input className={"text-box " + (this.props.height !== 1 ? "text-area" : "") + " input-" + this.props.theme + " text-box-" + this.props.theme} style={{lineHeight: (this.props.height !== 1 ? this.props.height + "em" : "inherit")}} type="text" placeholder={this.props.children} onClick={this.props.onClick}/>;
    }
}

import React from 'react';
import PropTypes from 'prop-types';

import "./button.css"

export default class Button extends React.Component
{
    static propTypes = {
        theme: PropTypes.string,
        onClick: PropTypes.func.isRequired
    };

    static defaultProps = {
        theme: "dark",
        children: "Ok"
    }

    render() {
        return <input className={"button button-" + this.props.theme} type="button" value={this.props.children} onClick={this.props.onClick}/>;
    }
}
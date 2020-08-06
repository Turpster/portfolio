import React from 'react';
import PropTypes from 'prop-types';

import "./button.css"

export default class Button extends React.Component
{
    static propTypes = {
        onClick: PropTypes.func.isRequired
    };

    static defaultProps = {
        children: "Ok"
    }

    render() {
        return <input className={"button"} type="button" value={this.props.children} onClick={this.props.onClick}/>;
    }
}
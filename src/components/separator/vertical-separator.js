import React from "react";
import "./vertical-separator.css"

import PropTypes from 'prop-types'

export default class VerticalSeparator extends React.Component
{
    static propTypes = {
        height: PropTypes.string,
        width: PropTypes.string,
        marginWidth: PropTypes.string,
        color: PropTypes.string,
    };

    static defaultProps = {
        height: undefined,
        width: undefined,
        marginWidth: undefined,
        color: undefined
    };

    render() {
        return (
            <div className={"vertical-separator"} style={{"height": this.props.height, "borderRightWidth": this.props.width, "borderColor": this.props.color, "margin-right": this.props.marginWidth, "margin-left" : this.props.marginWidth}}/>
        )
    }
}
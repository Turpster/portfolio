import React from "react";
import "./banner.css"

import PropTypes from 'prop-types'

export default class Banner extends React.Component
{
    static propTypes = {
        backgroundColor: PropTypes.string,
        color: PropTypes.string,
        height: PropTypes.string
    };

    static defaultProps = {
        backgroundColor: undefined,
        color: undefined,
        height: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"banner"} style={{'backgroundColor': this.props.backgroundColor, 'color': this.props.color, "height": this.props.height}}>
                {this.props.children}
            </div>
        )
    }
}
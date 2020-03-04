import React from "react";
import "./text.css"

import PropTypes from 'prop-types'

export default class Text extends React.Component
{
    static propTypes = {
        align: PropTypes.string
    };

    static defaultTypes = {
        align: undefined
    };

    constructor(props) {
        super(props);

        if (this.props.align)
        {
            this.alignCss = {
                "textAlign": this.props.align,
                "justifyContent": this.props.align
            }
        }
    }

    static Alignment = Object.freeze({"Left": "left", "Center": "center", "Right": "right"});

    render() {
        return (
            <div className={"text"} style={{...this.alignCss, "justifyContent": ""}}>
                {this.props.children}
            </div>
        )
    }
}
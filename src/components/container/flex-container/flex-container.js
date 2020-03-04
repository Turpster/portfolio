import React from "react";
import "./flex-container.css"

import PropTypes from 'prop-types'

export default class FlexContainer extends React.Component
{
    static propTypes = {
        flexDirection: PropTypes.string,
        justifyContent: PropTypes.string,
        alignContent: PropTypes.string,

        align: PropTypes.shape({
            k0: PropTypes.arrayOf(PropTypes.string),
            k1: PropTypes.arrayOf(PropTypes.string)
        }),
    };

    static defaultProps = {
        flexDirection: undefined,
        justifyContent: undefined,
        alignContent: undefined,
        align: undefined
    };

    static FlexAlignment = Object.freeze({"FlexStart": "flex-start", "FlexEnd": "flex-end", "Center": "center",
        "SpaceBetween": "space-between", "SpaceAround": "space-around", "Initial": "initial", "Inherit": "inherit"});

    static Direction = Object.freeze({"Column": "column", "Row": "row", "ColumnReverse": "column-reverse", "RowReverse": "row-reverse"});

    static Alignment = Object.freeze({"Right": {"marginLeft": "auto"}, "Left": {"marginRight": "auto"}, "Center": {"marginRight": "auto", "margin-left": "auto"}});

    render() {
        return (
            <div className={"flex-container"} style={{"justifyContent": this.props.justifyContent, "alignContent": this.props.alignContent, ...this.props.align, "flexDirection": this.props.flexDirection}}>
                {this.props.children}
            </div>
        )
    }
}
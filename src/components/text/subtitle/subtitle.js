import React from "react";
import "./subtitle.css"

import Text from "../text";

export default class Subtitle extends React.Component
{
    static propTypes = {
        ...Text.propTypes
    };

    static defaultProps = {
        ...Text.defaultTypes
    };

    render() {
        return (
            <Text align={this.props.align}>
                <div className={"subtitle"}>
                    {this.props.children}
                </div>
            </Text>
        )
    }
}
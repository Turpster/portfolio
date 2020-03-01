import React from "react";
import "./button.css"

export default class Button extends React.Component
{
    render() {
        return (
            <input type={"button"} className={"button"} value={this.props.children}/>
        )
    }
}
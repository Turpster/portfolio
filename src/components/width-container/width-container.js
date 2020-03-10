import React from 'react'
import "./width-container.css"

export default class WidthContainer extends React.Component
{
    render() {
        return (
            <ul className={"width-container"}>
                {this.props.children}
            </ul>
        )
    }
}
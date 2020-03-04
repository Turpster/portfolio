import React from "react";
import "./flex-width-container.css"

import WidthContainer from "../width-container/width-container";
import FlexContainer from "../flex-container/flex-container";

export default class FlexWidthContainer extends React.Component
{
    static propTypes = {
        ...WidthContainer.propTypes,
        ...FlexContainer.propTypes,
    };

    static defaultProps = {
        ...WidthContainer.defaultProps,
        ...FlexContainer.defaultProps
    };

    render() {
        return (
            <WidthContainer margin={this.props.margin}>
                <FlexContainer justifyContent={this.props.justifyContent} alignContent={this.props.alignContent}>
                    {this.props.children}
                </FlexContainer>
            </WidthContainer>
        )
    }
}
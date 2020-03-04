import React from "react";
import "./heading.css"

import PropTypes from 'prop-types'
import Text from "../text";

export default class Heading extends React.Component
{
    static propTypes = {
        ...Text.propTypes,
        level: PropTypes.number.isRequired
    };

    static defaultProps = {
        ...Text.defaultProps,
        level: 1
    };

    constructor(props) {
        super(props);

        let heading;

        switch (this.props.level)
        {
            default:
                heading = <h1 className={"heading"} style={{"justifyContent": this.props.align, "textAlign": this.props.align}}>{this.props.children}</h1>;
                break;
            case 2:
                heading = <h2 className={"heading"} style={{"justifyContent": this.props.align, "textAlign": this.props.align}}>{this.props.children}</h2>;
                break;
            case 3:
                heading = <h3 className={"heading"} style={{"justifyContent": this.props.align, "textAlign": this.props.align}}>{this.props.children}</h3>;
                break;
            case 4:
                heading = <h4 className={"heading"} style={{"justifyContent": this.props.align, "textAlign": this.props.align}}>{this.props.children}</h4>;
                break;
            case 5:
                heading = <h5 className={"heading"} style={{"justifyContent": this.props.align, "textAlign": this.props.align}}>{this.props.children}</h5>;
                break;
            case 6:
                heading = <h6 className={"heading"} style={{"justifyContent": this.props.align, "textAlign": this.props.align}}>{this.props.children}</h6>;
                break;
        }

        this.html = (
            <Text align={this.props.align}>
                {heading}
            </Text>
        )
    }

    render() {
        return this.html;
    }
}
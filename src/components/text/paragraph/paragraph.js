import React from "react";
import "./paragraph.css"
import Button from "../../button/button";

import PropTypes from 'prop-types'
import Text from "../text";

export default class Paragraph extends React.Component
{
    static propTypes = {
        ...Text.propTypes,
        expand: PropTypes.number
    };

    static defaultProps = {
        ...Text.defaultTypes,
        expand: undefined
    };

    constructor(props) {
        super(props);

        if (this.props.expand)
        {
            this.expandedText =
                <Text align={this.props.align}>
                    <div className={"paragraph"} style={{"justifyContent": this.props.align, "textAlign": this.props.align}}>
                        {this.props.children}
                    </div>
                    <Button onClick={this.shrinkText}>See less</Button>
                </Text>;

            this.shrunkedText =
                <Text align={this.props.align}>
                    <div className={"paragraph"} style={{"justifyContent": this.props.align, "textAlign": this.props.align}}>
                        {this.props.children.substring(0, this.props.expand)}
                    </div>
                    <Button onClick={this.expandText}>See more</Button>
                </Text>;

            this.state = {text: this.shrunkedText};
        }
        else
        {
            this.state = {text:
                <Text align={this.props.align}>
                    <div className={"paragraph"} style={{"justifyContent": this.props.align, "textAlign": this.props.align}}>
                        {this.props.children}
                    </div>
                </Text>
            };
        }
    }

    render() {
        return this.state.text;
    }

    expandText = () => {
        this.setState({text: this.expandedText});
    };

    shrinkText = () => {
        this.setState({text: this.shrunkedText});
    };
}
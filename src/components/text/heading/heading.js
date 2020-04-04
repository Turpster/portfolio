import React from 'react'

import '../text.css'
import './heading.css'

import PropTypes from 'prop-types'

import Text from "../text";

export default class Heading extends React.Component
{
    static propTypes = {
        level: PropTypes.number.isRequired,
        style: PropTypes.arrayOf({
            k0: PropTypes.string,
            k1: PropTypes.string
        })
    };

    static defaultProps = {
        level: 1,
        style: undefined
    };

    constructor(props) {
        super(props);

        switch (this.props.level)
        {
            default:
                this.heading =
                        <h1>
                            {this.props.children}
                        </h1>;
                break;
            case 2:
                this.heading =
                        <h2>
                            {this.props.children}
                        </h2>;
                break;
            case 3:
                this.heading =
                        <h3>
                            {this.props.children}
                        </h3>;
                break;
            case 4:
                this.heading =
                        <h4>
                            {this.props.children}
                        </h4>;
                break;
            case 5:
                this.heading =
                        <h5>
                            {this.props.children}
                        </h5>;
                break;
            case 6:
                this.heading =
                        <h6>
                            {this.props.children}
                        </h6>;
                break;
        }
    }

    render() {
        return (
            <Text className={"heading"} style={{...this.props.style}}>
                {this.props.children}
            </Text>
        )
    }
}
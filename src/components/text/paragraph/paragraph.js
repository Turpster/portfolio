import React from 'react'

import '../text.css'
import './paragraph.css'

import PropTypes from 'prop-types'
import Text from "../text";

export default class Paragraph extends React.Component
{
    static FontType = {serif: "serif", sansSerif: "sans-serif"};

    static propTypes = {
        style: PropTypes.arrayOf({
            k0: PropTypes.string,
            k1: PropTypes.string
        }),
        fontType: PropTypes.string
    };

    static defaultProps = {
        style: undefined,
        fontType: "sans-serif"
    };

    render() {
        return (
            <Text className={this.props.fontType ? "paragraph " + this.props.fontType : "paragraph"} style={{...this.props.style}}>
                <p>
                    {this.props.children}
                </p>
            </Text>
        )
    }
}
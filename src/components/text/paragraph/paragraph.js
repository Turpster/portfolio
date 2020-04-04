import React from 'react'

import '../text.css'
import './paragraph.css'

import PropTypes from 'prop-types'
import Text from "../text";

export default class Paragraph extends React.Component
{
    static propTypes = {
        style: PropTypes.arrayOf({
            k0: PropTypes.string,
            k1: PropTypes.string
        })
    };

    static defaultProps = {
        style: undefined
    };

    render() {
        return (
            <Text className={"paragraph"} style={{...this.props.style}}>
                <p>
                    {this.props.children}
                </p>
            </Text>
        )
    }
}
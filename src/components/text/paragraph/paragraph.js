import React from 'react'

import '../text.css'
import './paragraph.css'

import PropTypes from 'prop-types'

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
            <p className={"text paragraph"} style={{...this.props.style}}>
                {this.props.children}
            </p>
        )
    }
}
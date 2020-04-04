import React from 'react'

import PropTypes from 'prop-types'

export default class Text extends React.Component
{
    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.string
    };

    static defaultProps = {
        className: undefined,
        style: undefined
    };

    render() {
        return (
            <div className={this.props.className ? "text " + this.props.className : "text"} style={{...this.props.style}}>
                {this.props.children}
            </div>
        )
    }
}
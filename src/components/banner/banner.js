import React from 'react'
import "./banner.css"

import PropTypes from 'prop-types'

export default class Banner extends React.Component
{
    static propTypes = {
        style: PropTypes.arrayOf({
            k0: PropTypes.string,
            k1: PropTypes.string
        }),
        padding: PropTypes.bool
    };

    static defaultProps = {
        style: undefined,
        padding: true
    };

    render() {
        return (
            <div className={"banner" + (this.props.padding ? " banner-padding" : "")} style={{...this.props.style}}>
                {this.props.children}
            </div>
        )
    }

    /**
     * @returns {Banner} Background banner
     */
    static backgroundBanner(imageUrl, color, children)
    {
        this.bannerRef = React.createRef();

        return <Banner style={{"backgroundImage": "url(" + imageUrl + ")", "color": color}} ref={this.bannerRef}>{children}</Banner>
    }
}
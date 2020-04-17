import React from 'react'
import "./banner.css"

import PropTypes from 'prop-types'

export default class Banner extends React.Component
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
            <div className={"banner"} style={{...this.props.style}}>
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
import React from 'react'
import "./side-nav.css"

import PropTypes from 'prop-types'

export default class SideNav extends React.Component
{
    static propTypes = {
        yMargin: PropTypes.string,
        yDelay: PropTypes.string
    };

    static defaultProps = {
        yMargin: undefined,
        yDelay: undefined
    };

    render() {
        return (
            <ul className={"side-nav"} style={{"--nav-bar-y-margin": this.props.yMargin, "--nav-bar-y-delay": this.props.yDelay}}>
                <h1>Portfolio</h1>
                <li><a href={"#about"}>About</a></li>
                <li><a href={"#projects"}>Projects</a></li>
                <li><a href={"#reviews"}>Reviews</a></li>
                <li><a href={"#contact"}>Contact</a></li>
                <h1>Instances</h1>
                <li><a href={"/nextcloud"}>Nextcloud</a></li>
                <li><a href={"/jenkins"}>Jenkins</a></li>
            </ul>
        )
    }
}
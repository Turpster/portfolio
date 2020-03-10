import React from 'react'
import "./side-nav.css"

export default class NavigationBar extends React.Component
{
    render() {
        return (
            <ul className={"navigation-bar"}>
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
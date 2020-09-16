import React from 'react';
import SideNav from "./side-nav";

export default class PageComponentSideNavPreview extends React.Component
{
    render() {
        return (
            <div style={{"height": "600px", "border": "2px dashed black", "margin": "10px"}}>
                <SideNav/>
            </div>
        )
    }
}

import React from 'react'

import "./image.css"

import PropTypes from 'prop-types'

export default class Image extends React.Component
{
    static propTypes = {
        theme: PropTypes.string,

        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,

        style: PropTypes.arrayOf(PropTypes.shape({
            property: PropTypes.string
        })),

        className: PropTypes.string,

        width: PropTypes.string,
        height: PropTypes.string,

        svgColor: PropTypes.string
    };

    static defaultProps = {
        theme: "dark",

        src: undefined,
        alt: undefined,

        style: undefined,
        className: undefined,

        width: undefined,
        height: undefined,
    };

    render() {

        let image;

        let imageClass = (this.props.className ? this.props.className + " image" : "image") + " image-" + this.props.theme;

        if (this.props.src.toLowerCase().endsWith(".svg"))
        {
            image = (
                    <div className={imageClass + " svg-image"} style={{...this.props.style, maskImage: "url('" + this.props.src + "')", backgroundColor: this.props.svgColor, height: this.props.height, width: this.props.width}} title={this.props.alt}>
                         <img className={imageClass + " svg-contain-image"} src={this.props.src} alt={this.props.alt} style={{...this.props.style}} width={this.props.width} height={this.props.height}/>
                    </div>
                )
        }
        else
        {
            image = (<img className={imageClass} src={this.props.src} alt={this.props.alt} width={this.props.width} height={this.props.height}/>)
        }

        return image;
    }
}
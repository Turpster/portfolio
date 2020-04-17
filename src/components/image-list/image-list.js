import React from 'react'

import "./image-list.css"

import PropTypes from 'prop-types'

import Image from "../image/image";

export default class ImageList extends React.Component
{
    static propTypes = {
        images: PropTypes.arrayOf(Image.propTypes).isRequired
    };

    static defaultProps = {
        images: undefined
    };

    render() {
        let height = this.getHeightFromImages();

        console.log("HEIGHT: " + height);

        let imageProps = [];

        for (let x = 0; x < this.props.images.length; x++)
        {
            let image = this.props.images[x];

            imageProps.push(<Image
                className={image.className}
                height={image.height}
                width={image.width}
                style={image.style}
                src={image.src}
                svgColor={this.svgColor}
                alt={this.alt}/>)
        }


        return (
            <div className={"image-list"} style={{height: height}}>
                {imageProps}
            </div>
        )
    }

    getHeightFromImages = () => {

        let height = "0px";

        for (let x = 0; x < this.props.images.length; x++)
        {
            let image = this.props.images[x];

            let imageHeight = 0;

            if (image.height)
            {
                imageHeight = image.height;
            }
            else
            {
                imageHeight = Image.defaultProps.height
            }

            console.log("imageHEIGHT: " + imageHeight);

            if (imageHeight > height)
            {
                height = imageHeight
            }
        }

        return height;
    }
}
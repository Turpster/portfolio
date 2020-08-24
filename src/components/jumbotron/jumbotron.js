import React from 'react'
import "./jumbotron.css"
import Banner from "../banner/banner";
import PropTypes from 'prop-types';
import WidthContainer from "../width-container/width-container";

export default class Jumbotron extends React.Component
{
    static propTypes = {
        img: PropTypes.string
    };

    static defaultProps = {
        img: undefined
    };

    render() {
        return (
            <Banner style={{backgroundImage: this.props.img ? "url('" + this.props.img + "')" : "none"}}>
                <WidthContainer>
                    <div className={"jumbotron-content"}>
                        {this.props.children}
                    </div>
                </WidthContainer>
            </Banner>
        )
    }
}
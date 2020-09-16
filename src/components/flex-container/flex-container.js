import React from 'react';
import "./flex-container.css"
import PropTypes from 'prop-types'

export default class FlexContainer extends React.Component
{
    static propTypes = {
        itemWidth: PropTypes.number,
    }

    static defaultProps = {
        itemWidth: 2,
    }

    render() {

        let flexObjects = [];

        for (let i = 0; i < this.props.children.length; i++)
        {
            let child = this.props.children[i];
            flexObjects[i] = <div className={"flex-container-item"} style={{"flex": 100 / this.props.itemWidth + "%"}}>{child}</div>
        }

        return <div className={"flex-container"}>{flexObjects}</div>;
    }
}
import React, { Component } from 'react';
import { connect } from 'react-redux';



class Card extends Component {

    render () {
        return (
            <div className="card">
                {this.props.place.name}
            </div>
        );
    }
}

export default Card;
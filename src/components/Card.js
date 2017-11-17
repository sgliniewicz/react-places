import React, { Component } from 'react';



class Card extends Component {

    render () {
        return (
            
            <div className="card">
                {this.props.placeName}
            </div>
        );
    }
}

export default Card;
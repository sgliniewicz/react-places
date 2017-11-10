import React, { Component } from 'react';
import Card from '../card';

class CardGrid extends Component {

    fetchPlaces(url) {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // Here you get the data to modify as you please
            console.log(data)
        });
    }

    componentWillMount() {
        //fetch Google info on mount
        const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Sydney&key=AIzaSyCOXDkFOBE-H2kq2tzmJDauijmak-iFdRU'       
        this.fetchPlaces(url);
   
    }

    render() {
        return (
            <div>
                GRID!
            </div>
        );
    }
}

export default CardGrid;
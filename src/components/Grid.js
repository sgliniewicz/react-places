import React, { Component } from 'react';
import { connect } from  'react-redux';
import Card from './Card';

class CardGrid extends Component {

    constructor(props) {
        //pass props back to parents
        super(props); 
        //initial State
        this.state = {
            places: []
        }
    }

    fetchPlaces(url) {
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // Here you get the data to modify as you please
            //console.log(data.results)
            this.setState({
                places: data.results
            })

        });
    }

    componentWillMount() {
        //fetch Google info on mount
        const url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+Chicago&key=AIzaSyCOXDkFOBE-H2kq2tzmJDauijmak-iFdRU'       
        this.fetchPlaces(url);
    }

    render() {

        return (
            <div>
                <h1>GRID!</h1>
                 
                <ul>
                    {this.state.places.map((place, index) => (
                        // Only do this if items have no stable IDs
                        <li key={index}>
                            <Card place={place}/>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default CardGrid;
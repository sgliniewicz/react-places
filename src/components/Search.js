import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBox extends Component {

    render() {
        return (
            <div className="search">
                <input type="text" className="searchBox" placeholder="What are you looking for?"/>
                <input type="submit" value="Search" className="searchBtn" />
            </div>
        );
    }
}

export default SearchBox;
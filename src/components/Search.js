import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactDOM from 'react-dom';

const SearchBox = ({}) => {
    return (
        <div className="search">
            <span>{placeName}</span>
            <input type="text" className="searchBox" placeholder="What are you looking for?"/>
            <input type="submit" value="Search" className="searchBtn" onClick={searchPlaces} />
        </div>
    );
}


class SearchBox extends Component {

    render() {
        return (
            <div className="search">
                <span></span>
                <input type="text" className="searchBox" placeholder="What are you looking for?"/>
                <input type="submit" value="Search" className="searchBtn" />
                
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        placeName: state.placeName
    }
}
  
const mapDispatchToProps = dispatch => {
return {
    searchPlaces : () => dispatch({
            type : 'SEARCH_PLACES'
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
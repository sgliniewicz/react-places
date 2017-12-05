import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBox from './Search';
import CardGrid from './Grid';

import './app.css'


class App extends Component {

    render () {
        return (
            <div className="container">
                <SearchBox/>
                <CardGrid/>
            </div>
        );
    }
}

export default App;
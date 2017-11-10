import React, { Component } from 'react';
import SearchBox from '../search';
import CardGrid from '../grid';


class App extends Component {
    
    componentWillMount(){
        console.log("Lifecycle Method when component mounts on application");
    
    }

    render () {
        return (
            <div>
               <CardGrid/>
            </div>
        );
    }
}


export default App;
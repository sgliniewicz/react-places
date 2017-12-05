import { combineReducers } from 'redux'

const reducer = (state = [], action) => {
    switch(action.type) {
      case 'SEARCH_PLACES':
        console.log("I'VE Reached This Reducer")
        return null;
    }
  
    return state;
  
};

const reactPlacesApp = combineReducers({reducer})

export default reactPlacesApp;
import { createStore, combineReducers } from 'redux';
import reactPlacesApp from './reducers';
//import createHistory from 'history/createBrowserHistory'

//export const history = createHistory();

//REDUX
const initialState = {
    placeName:"",
    places: []
};


const store = createStore(initialState,reactPlacesApp);

export default store;
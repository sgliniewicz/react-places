import { createStore, combineReducers } from 'redux';
import reducers from './reducers';
//import createHistory from 'history/createBrowserHistory'

//export const history = createHistory();

//REDUX
const initialState = {
    appName: 'React Places',
    places: null
};

const store = createStore(
    reducers
);

export default store;
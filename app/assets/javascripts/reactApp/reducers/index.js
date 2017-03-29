import { combineReducers } from 'redux';
import { routerReducer }   from 'react-router-redux';
import search from './search.js.es6';
import tracks from './tracks.js.es6';

const rootReducer = combineReducers({ search, tracks, router: routerReducer });

export default rootReducer;

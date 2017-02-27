import { combineReducers } from 'redux';
import search from './search.js.es6';
import tracks from './tracks.js.es6';

const djApp = combineReducers({ search, tracks });

export default djApp;

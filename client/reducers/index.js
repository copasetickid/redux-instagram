import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './postReducer';
import comments from './commentReducer';

const  rootReducer = combineReducers({
  posts, comments, router: routerReducer
});

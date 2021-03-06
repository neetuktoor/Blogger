//inside this reducer we will reutn an object that contains
//the ID of every post as the key & value will be post

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  //PostsReducer assigned to post's piece of state
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;

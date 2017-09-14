import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=Quig12';

//action creator that will fetch lists of posts & return them
//to that reducer.
//Needs to reach out to API through network request
export function fetchPosts () {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request //middleware resolves this request
  };
}

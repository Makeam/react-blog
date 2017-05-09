import * as types from 'constants/actionTypes/PostsActionTypes';
import request from 'superagent';
import { API_SERVER_PATH } from 'constants/blogConfig';
import { camelizeKeys } from 'humps';

const requestPosts = () => ({
  type: types.FETCH_POSTS_REQUEST
});

const receivePosts = (response) => ({
  type: types.FETCH_POSTS_SUCCESS,
  response
});

const errorPosts = () => ({
  type: types.FETCH_POSTS_ERROR
});

export function fetchPosts() {
  return (dispatch) => {
    dispatch(requestPosts());
    return request
      .get(`${API_SERVER_PATH}/posts`)
      .set({Accept: 'application/json'})
      .end((err,response) => {
        err ? dispatch(errorPosts()) : dispatch(receivePosts(camelizeKeys(response.body)));
      });
  };
}
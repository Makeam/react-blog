import * as types from 'constants/actionTypes/PostActionTypes';
import request from 'superagent';
import { API_SERVER_PATH } from 'constants/blogConfig';

const requestPost = (id) => ({
  type: types.FETCH_POST_REQUEST
});

const errorPost = () => ({
  type: types.FETCH_POST_ERROR
});

const receivePost = (response) => ({
  type: types.FETCH_POST_SUCCESS,
  response
});

export function fetchPost(id) {
  return (dispatch) => {
    dispatch(requestPost(id));
    return request
      .get(`${API_SERVER_PATH}/posts/${id}`)
      .set({Accept: 'application/json'})
      .end((err, response) => {
        err ? dispatch(errorPost()) : dispatch(receivePost(response.body));
      });
  };
}
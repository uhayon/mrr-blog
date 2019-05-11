import _ from 'lodash';
import { FETCH_POSTS, FETCH_USER } from '../constants';
import { searchPosts, searchUser } from '../api/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
}

export const fetchPosts = () => async dispatch => {
  const response = await searchPosts();

  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await searchUser(id);

  dispatch({ type: FETCH_USER, payload: response.data });
}

// LODASH MEMOIZING

// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await searchUser(id);

//   dispatch({ type: FETCH_USER, payload: response.data });
// });
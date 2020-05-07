import axios from 'axios';
import { structurePostsData, structurePostData } from './helpers';
import { 
  IS_LOADING,
  GET_POSTS, 
  GET_POST,
  CREATE_POST, 
  DELETE_POST, 
  // GET_COMMENTS, 
  CREATE_COMMENT, 
  DELETE_COMMENT, 
  SHOW_ERR
} from "./actionTypes";
import { API_URL } from './config';

export function showErr(msg) {
  return { type: SHOW_ERR, msg };
}

export function startLoad() {
  return { type: IS_LOADING };
}

export function gotPosts(postData, postId) {
  return { type: GET_POSTS, postData, postId};
}

export function gotPost(postData, postId) {
  return { type: GET_POST, postData, postId};
}

export function createPost(postData) {
  return { type: CREATE_POST, postData };
}

export function deletePost(postId) {
  return { type: DELETE_POST, postId };
}

// export function gotComments(comments, postId) {
//   return { type: GET_COMMENTS, comments, postId };
// }

export function createComment(commentData) {
  return { type: CREATE_COMMENT, commentData };
}

export function deleteComment(commentId, postId) {
  return { type: DELETE_COMMENT, commentId, postId};
}

export function getPostsFromAPI() {
  return async function(dispatch) {
    dispatch(startLoad());

    try {
      let res = await axios.get(`${API_URL}/posts`);
      dispatch(gotPosts(structurePostsData(res.data)));
    }

    catch(err) {
      dispatch(showErr(err.response.data));
    }
  }
}

export function getPostFromAPI(postId) {
  return async function(dispatch) {
    dispatch(startLoad());

    try {
      let res = await axios.get(`${API_URL}/posts/${postId}`);
      dispatch(gotPost(structurePostData(res.data), postId));
    }

    catch(err) {
      dispatch(showErr(err.response.data));
    }
  }
}


import axios from 'axios';
import { structurePostsData, 
          structurePostData, 
          structureUpdatedPostData } from './dataRestructurers';
import { 
  IS_LOADING,
  GET_POSTS, 
  GET_POST,
  CREATE_POST, 
  DELETE_POST, 
  UPDATE_POST,
  CREATE_COMMENT, 
  DELETE_COMMENT, 
  UPDATE_VOTES,
  SHOW_ERR,
  CLEAR_ERR
} from "./actionTypes";
import { API_URL } from './config';

export function showErr(msg) {
  return { type: SHOW_ERR, msg };
}

export function clearErr() {
  return { type: CLEAR_ERR };
}

export function startLoad() {
  return { type: IS_LOADING };
}

// TODO postId here should be superfluous. 
export function gotPosts(postsData, postId) {
  return { type: GET_POSTS, postsData, postId};
}

export function gotPost(postData, postId) {
  return { type: GET_POST, postData, postId};
}

export function createdPost(postData, postId) {
  return { type: CREATE_POST, postData, postId };
}

export function deletedPost(postId) {
  return { type: DELETE_POST, postId };
}

export function updatedPost(postData, postId ) {
  return { type: UPDATE_POST, postData, postId };
}

export function createdComment(commentText, commentId, postId) {
  return { type: CREATE_COMMENT, commentText, commentId, postId };
}

export function deletedComment(commentId, postId) {
  return { type: DELETE_COMMENT, commentId, postId};
}

export function updateVotes(postId, votes) {
  return { type: UPDATE_VOTES, postId, votes};
}

//Makes API callfor all posts data and dispatches action to rootReducer
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

//Makes API callfor a single post's data and dispatches action to rootReducer
export function getPostFromAPI(postId) {
  return async function(dispatch) {
    dispatch(startLoad());

    try {
      let res = await axios.get(`${API_URL}/posts/${postId}`);
      if(res.headers['content-length'] !== '0'){
        dispatch(gotPost(structurePostData(res.data), postId));
      }else{
        dispatch(showErr('post does not exist'));
      }
    }
    catch(err) {
      dispatch(showErr(err.response.data))
    }
  }
}

//Makes API post request to create a new post on the backend and dispatches to
// rootReducer to update state
export function createPostWithAPI({title, description, body}) {
  return async function(dispatch) {

    try {
      let res = await axios.post(`${API_URL}/posts/`, {title, description, body});
      dispatch(createdPost(structurePostData(res.data), res.data.postId));
    }
    catch(err) {
      dispatch(showErr(err.response.data));
    }
  }
}

//Makes API post request to create a new comment on the backend and dispatches to
// rootReducer to update state
export function createCommentWithAPI({text}, postId) {
  return async function(dispatch) {

    try {
      let res = await axios.post(`${API_URL}/posts/${postId}/comments`, { text });
      dispatch(createdComment( res.data.text, res.data.id, postId));
    }
    catch(err) {
      dispatch(showErr(err.response.data));
    }
  }
}

//Makes API delete request to delete a comment on the backend and dispatches to
// rootReducer to update state
export function deleteCommentFromAPI(commentId, postId) {
  return async function(dispatch) {

    try {
        await axios.delete(`${API_URL}/posts/${postId}/comments/${commentId}`);
        dispatch(deletedComment(commentId, postId));
    }
    catch(err) {
      dispatch(showErr(err.response.data));
    }
  }
}

//Makes API delete request to delete a post on the backend and dispatches to
// rootReducer to update state
export function deletePostFromAPI(postId) {
  return async function(dispatch) {

    try {
        await axios.delete(`${API_URL}/posts/${postId}/`);
        dispatch(deletedPost(postId));
    }
    catch(err) {
      dispatch(showErr(err.response.data));
    }
  }
}

//Makes API put request to update a post on the backend and dispatches to
// rootReducer to update state
export function updatePostWithAPI(postData, postId) {
  return async function(dispatch) {
    console.log("UpdatePostWithAPI, postData: ", postData, "postId: ", postId);
    try {
        let res = await axios.put(`${API_URL}/posts/${postId}/`, postData);
        console.log(structureUpdatedPostData(res.data))
        dispatch(updatedPost(structureUpdatedPostData(res.data), postId));
    }
    catch(err) {
      dispatch(showErr(err.response.data));
    }
  }
}

export function updateVotesWithAPI(postId, direction) {
  return async function(dispatch) {
    try {
        let res = await axios.post(`${API_URL}/posts/${postId}/vote/${direction}`);
        dispatch(updateVotes(postId, res.data.votes));
    }
    catch(err) {
      dispatch(showErr(err.response.data));
    }
  }
}

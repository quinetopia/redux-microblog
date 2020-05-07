import { 
  ADD_POSTS, 
  CREATE_POST, 
  DELETE_POST, 
  ADD_COMMENTS, 
  CREATE_COMMENT, 
  DELETE_COMMENT, 
  SHOW_ERR, 
  SHOW_SPINNER
} from "./actionTypes";

export function showErr(msg) {
  return { type: SHOW_ERR, msg };
}

export function startLoad() {
  return { type: SHOW_SPINNER };
}

export function gotPosts(posts) {
  return { type: ADD_POSTS, posts };
}

export function createPost(postData, postId) {
  return { type: CREATE_POST, postData, postId };
}

export function deletePost(postId) {
  return { type: DELETE_POST, postId };
}

export function addComments(comments, postId) {
  return { type: ADD_COMMENTS, comments, postId };
}

export function createComment(commentData) {
  return { type: CREATE_COMMENT, commentData };
}

export function deleteComment(commentId, postId) {
  return { type: DELETE_COMMENT, commentId, postId};
}




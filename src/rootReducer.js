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

const DEFAULT_STATE = {
  posts: {},
  error: null,
  loading: true
};

/**
 * 
 * 
 */
function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {

    case SHOW_ERR:
      return {
        ...state, 
        error: action.msg
      }
    case CLEAR_ERR:
      return {
        ...state,
        error: null
      }

    //changes loading to true in state
    case IS_LOADING:
      return { ...state, loading: true };

    //puts a new post in state after entry in backend db
    case CREATE_POST:
      console.log("rootReucer, createPost. action: ", action);
      return { ...state, posts: { ...state.posts, [action.postId]: action.postData } }

    //puts a new comment in state after entry in backend db
    case CREATE_COMMENT:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            comments: {
              ...state.posts[action.postId].comments,
              [action.commentId]: { text: action.commentText }
            }
          }
        }
      };

    // Updates posts in state with new data from backend db
    case GET_POSTS:
      return { ...state, posts: action.postsData, loading: false }

    // Updates posts in state with new detailed data from backend db
    // including body and comments
    case GET_POST:
      return {
        ...state,
        loading: false,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...action.postData,
            comments: {
              ...action.postData.comments
            }
          }
        }
      }

    //deletes post from state after deletion from backend db
    case DELETE_POST:
      const newPosts = { ...state.posts }
      delete newPosts[action.postId]
      return {
        ...state,
        posts: newPosts
      };

    case UPDATE_POST:

      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            ...action.postData
          }
        }
      };

    //deletes comment from state after deletion from backend db
    case DELETE_COMMENT:
      const newComments = { ...state.posts[action.postId].comments }
      delete newComments[action.commentId]
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            comments: newComments
          }
        }
      };

    case UPDATE_VOTES:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            votes: action.votes
          }
        }
      };

    default:
      return state;

  }
}


export default rootReducer;

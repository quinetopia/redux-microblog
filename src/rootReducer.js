import { 
  ADD_POSTS, 
  CREATE_POST, 
  DELETE_POST, 
  ADD_COMMENTS, 
  CREATE_COMMENT, 
  DELETE_COMMENT 
  // SHOW_ERR, 
  // SHOW_SPINNER
} from "./actionTypes";

const DEFAULT_STATE = {
  posts:
  {
    uniquePostId:{
      title: "", 
      description: "", 
      body: "", 
      comments: {
        uniqueCommentId: {
          text: "" 
        } 
      } 
    }
  },
  error: "",
  loading: false
};

/**
 * 
 * 
 */
function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {

    //puts a new post in state after entry in backend db
    case CREATE_POST: 
      return {...state, posts:{...state.posts, [action.id]:action.postData}}
    
    //puts a new comment in state after entry in backend db
    case CREATE_COMMENT:
      return {
        ...state, 
        posts:{
          ...state.posts, 
          [action.postId]:{
            ...state.posts[action.postID],
            comments:{
              ...state.posts[action.postID].comments, 
              [action.commentId]: action.commentData
            }
          }
        }
      };
    
    // Updates posts in state with new data from backend db
    case ADD_POSTS:
      return {...state, posts: action.postData}

    // Updates comments for a specific post in state with new data from backend db
    case ADD_COMMENTS:
      return {
        ...state, 
        posts: {
          ...state.posts, 
          [action.postId]:{
            ...state.posts[action.postId],
            comments: action.comments
          }
        }
      };

    //deletes post from state after deletion from backend db
    case DELETE_POST:
      const newPosts = {...state.posts}
      delete newPosts[action.postId]
      return {
        ...state,
        posts: newPosts
      };

    //deletes comment from state after deletion from backend db
    case DELETE_COMMENT:
      const newComments = {...state.posts[action.postID].comments}
      delete newComments[action.commentId]
      return {
        ...state,
        posts: {
          ...state.posts, 
          [action.postId]:{
            ...state.posts[action.postID],
            comments: newComments
          }
        }
      };
    
    default:
      return state;
    
  }
}


export default rootReducer;

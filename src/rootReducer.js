import { 
  IS_LOADING,
  GET_POSTS, 
  GET_POST,
  CREATE_POST, 
  DELETE_POST, 
  // GET_COMMENTS, 
  CREATE_COMMENT, 
  DELETE_COMMENT 
  // SHOW_ERR
} from "./actionTypes";

const DEFAULT_STATE = {
  posts:{},
  // {
  //   uniquePostId:{
  //     title: "", 
  //     description: "", 
  //     body: "", 
  //     comments: {
  //       uniqueCommentId: {
  //         commentText: "" 
  //       } 
  //     } 
  //   }
  // },
  error: "",
  loading: true
};

/**
 * 
 * 
 */
function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {

    //changes loading to true in state
    case IS_LOADING:
      return { ...state, loading: true };

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
            ...state.posts[action.postId],
            comments:{
              ...state.posts[action.postId].comments, 
              [action.commentId]: action.commentData
            }
          }
        }
      };
    
    // Updates posts in state with new data from backend db
    case GET_POSTS:
      return {...state, posts: action.postData, loading: false}

    case GET_POST:
      return {
        ...state, 
        loading: false,
        posts:{
          ...state.posts, 
          [action.postId]:{
            ...action.postData,
            comments:{
              ...action.postData.comments
            }
          }
        }
      }

    // Updates comments for a specific post in state with new data from backend db
    // case GET_COMMENTS:
    //   return {
    //     ...state, 
    //     posts: {
    //       ...state.posts, 
    //       [action.postId]:{
    //         ...state.posts[action.postId],
    //         comments: action.comments
    //       }
    //     }
    //   };

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

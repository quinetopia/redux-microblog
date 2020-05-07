import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom"
// import { LOREM_IPSUM } from "./config"
import PostForm from "./PostForm"
import Comments from './Comments'
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import { getPostFromAPI } from "./actionCreators";


/**
 * Shows details of individual post. Get post id from params
 */
function PostDetails() {
  const { id } = useParams();

  const [editClicked, setEditClicked] = useState(false);
  const {post, loading } = useSelector(st => ({post: st.posts[id], loading: st.loading}), shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostFromAPI(id));
  }, [dispatch, id]);

  //maybe delete comments from state when details dismounts
  // const { title, description, body, comments } = INITIAL_STATE;
  const history = useHistory();

  function handleDeleteClick() {
    //assume we will be calling on a delete function from actions.
    //for now:
    history.push("/");
  }

  function handleCommentDelete(id){
   // dispatch to Thunk actionCreator.
    console.log('delete this comment');
  }

  function showPostOrEdit() {
    if (editClicked) {
      return <PostForm
        id={id}
        postDetails={post}
        setEditClicked={setEditClicked} />
    } else {
      return (
        <div>
          <div>
            <h1>{post.title}</h1>
            <button className="Post-edit-btn" onClick={() => setEditClicked(true)}>Edit</button>
            <button className="Post-delete-btn" onClick={handleDeleteClick}>Delete</button>
            <h3>{post.description}</h3>
            <p>{post.body}</p>
          </div>
          <Comments comments={post.comments} id={id} handleDelete={handleCommentDelete}/>
        </div>
      )

    }
  }




  return (
    <div>
      {loading ? <p>Loading...</p> : showPostOrEdit()}
    </div>


  )
}

export default PostDetails;
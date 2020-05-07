import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { LOREM_IPSUM } from "./config"
import PostForm from "./PostForm"
import Comments from './Comments'


/**
 * Shows details of individual post. Get post id from params
 */
function PostDetails() {
  const { id } = useParams();
  // call api to make call to backend for post data from id.
  // for now use dummy data

  const [editClicked, setEditClicked] = useState(false)
  //this would be actual state
  const INITIAL_STATE = { 
    title: "First post!", 
    description: "The best post ever", 
    body: LOREM_IPSUM, 
    comments: {id: {text: 'Hey!'}} 
  }
  //CALLING USE SELECTOR GRABBING AN ENTIRE POST INCLUDING COMMENTS
  //maybe delete comments from state when details dismounts
  const { title, description, body, comments } = INITIAL_STATE;
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
        postDetails={INITIAL_STATE}
        setEditClicked={setEditClicked} />
    } else {
      return (
        <div>
          <div>
            <h1>{title}</h1>
            <button className="Post-edit-btn" onClick={() => setEditClicked(true)}>Edit</button>
            <button className="Post-delete-btn" onClick={handleDeleteClick}>Delete</button>
            <h3>{description}</h3>
            <p>{body}</p>
          </div>
          <Comments comments={comments} id={id} handleDelete={handleCommentDelete}/>
        </div>
      )

    }
  }




  return (
    <div>
      {showPostOrEdit()}
    </div>


  )
}

export default PostDetails;
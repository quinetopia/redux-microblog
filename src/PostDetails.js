import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { LOREM_IPSUM } from "./config"
import NewPostForm from "./NewPostForm"
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
  const INITIAL_STATE = { title: "First post!", description: "The best post ever", body: LOREM_IPSUM }
  const { title, description, body } = INITIAL_STATE;
  const history = useHistory();

  function handleDeleteClick() {
    //assume we will be calling on a delete function from actions.
    //for now:
    history.push("/");
  }

  function showPostOrEdit() {
    if (editClicked) {
      return <NewPostForm
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
          <Comments id={id} />
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
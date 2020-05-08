

import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { createCommentWithAPI } from "./actionCreators";

/*Allows creation of new comments.
*/

function NewCommentForm({ postId }) {
  const inital_comment_state = '';
  const [formData, setFormData] = useState(inital_comment_state);
  const dispatch = useDispatch();

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(createCommentWithAPI({text: formData }, postId))
    setFormData(inital_comment_state);

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="commentText">
          <input type="text"
            name="commentText"
            value={formData}
            placeholder="New Comment"
            onChange={handleChange}
          />
        </label>
        <button>Add</button>
      </form>
    </div>
  )
}

export default NewCommentForm;
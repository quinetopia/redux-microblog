

import React, { useState } from 'react';

/*Allows creation of new comments.
*/

function NewCommentForm() {
  const inital_comment_state = '';
  const [formData, setFormData] = useState(inital_comment_state);

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    //add formData to higher state {commentText: formData}
    //call dispatch on thunk actionCreator 
    setFormData(inital_comment_state);

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="commentText">
          <input type="text"
            name="commentText"
            value={formData.text}
            placeholder="New Comment"
            onChange={handleChange}
          ></input>
        </label>
        <button>Add</button>
      </form>
    </div>
  )
}

export default NewCommentForm;
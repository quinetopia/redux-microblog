import React, { useState } from 'react';

function NewCommentForm() {
  const inital_comment_state = '';
  const [formData, setFormData] = useState(inital_comment_state);

  function handleChange(evt) {
    setFormData(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    //add formData to higher state {text: formData}
    setFormData(inital_comment_state);

  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">
          <input type="text"
            name="text"
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
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
// import {useDispatch} from "react-redux";
// import { v4 as uuid } from 'uuid';


/**
 * Creates new post for blog.
 * 
 */
function NewPostForm() {
  const INITIAL_STATE = { title: "", description: "", body: ""};
  const [formData, setFormData] = useState(INITIAL_STATE);
  const history = useHistory();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  const hanldeSubmit = (evt) =>{
    evt.preventDefault();
    // save data to state when we know what state is!
    history.push("/");
  }

  
  return (
    <div>
      <form onSubmit={hanldeSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text"
          name="title"
          value={formData.title}
          placeholder=""
          onChange={handleChange}
        ></input><br/>

        <label htmlFor="description">Description</label>
        <input type="text"
          name="description"
          value={formData.description}
          placeholder=""
          onChange={handleChange}
        ></input><br/>

        <label htmlFor="body">Body</label>
        <input type="text"
          name="body"
          value={formData.body}
          placeholder=""
          onChange={handleChange}
        ></input><br/>

        <button className="NewPostForm-submit-btn">
          Save
        </button>
        
      </form>
      <button className="NewPostForm-cancel-btn" onClick={()=> history.push("/")} >Cancel</button>
    </div>
  )
}


export default NewPostForm;
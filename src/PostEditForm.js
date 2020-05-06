import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom"
import { LOREM_IPSUM } from "./config"



function Post( { setEditClicked }){
  const { id } = useParams();
  // call api to make call to backend for post data from id.
  // for now use dummy data
  const INITIAL_STATE = { title: "First post!", description : "The best post ever", body: LOREM_IPSUM}
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
    setEditClicked(false)
    history.push(`/${id}`);
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

      <button className="PostEditForm-submit-btn">
        Save
      </button>
      
    </form>
    <button className="PostEditForm-cancel-btn" onClick={()=> setEditClicked(false)} >Cancel</button>
  </div>
  
  )
}

export default Post;
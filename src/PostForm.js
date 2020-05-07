import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
// import {useDispatch} from "react-redux";


/**
 * Creates new post for blog.
 * 
 */
const INITIAL_STATE = { title: "", description: "", body: ""};
function PostForm({id, postDetails=INITIAL_STATE, setEditClicked}) {
  const [formData, setFormData] = useState(postDetails);
  const history = useHistory();
  console.log(id);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  /**handleSubmit: if editing post set editClicked state to false 
   * and update post in database redirect to post 
   * if adding add post to data base redirect to Blog
  */
  const handleSubmit = (evt) =>{
    evt.preventDefault();
    if(id){
      //update state 
      //call dispatch on thunk actionCreator to update post
      setEditClicked(false)
    }else{
      // save data to state when we know what state is!
      //call dispatch on thunk actionCreator to create post
      history.push("/");
    }
  }

  /**handleCancel: if editing set editClicked state to false 
   * if adding redirect to Blog
   */
  function handleCancel(){
    if(id){
      setEditClicked(false)
    }else{
      history.push('/');
    }
  }

  
  return (
    <div>
      <form onSubmit={handleSubmit}>
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

        <button className="PostForm-submit-btn">
          Save
        </button>
        
      </form>
      <button className="PostForm-cancel-btn" onClick={handleCancel} >Cancel</button>
    </div>
  )
}


export default PostForm;
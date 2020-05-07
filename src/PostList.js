import React, {useEffect} from 'react';
import PostCard from './PostCard.js';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import { getPostsFromAPI } from "./actionCreators";


// Makes call to db to get brief version of posts and lists them 
function PostList(){
  const posts = useSelector(st => st.posts, shallowEqual);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPostsFromAPI());
  }, [dispatch]);


  return(
    <div>
      {Object.entries(posts).map(([postId, postDetails]) => (
      <PostCard 
      key={postId}
      id={postId}
      postDetails={postDetails}
      />))}
    </div>
  )
}

export default PostList;
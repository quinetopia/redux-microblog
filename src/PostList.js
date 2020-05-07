import React, {useEffect} from 'react';
import PostCard from './PostCard.js';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import { getPostsFromAPI } from "./actionCreators";


function PostList(){
  const posts = useSelector(st => st.posts, shallowEqual);
  console.log('POSTLIST STATE', posts);
  // const error = useSelector(st => st.error);
  const dispatch = useDispatch();
  // const postList = {
  //   'uniqueId': { title: "First post!", description: "The best post ever", body: LOREM_IPSUM, comments: {commentId: {text: ''}} }
  // }

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
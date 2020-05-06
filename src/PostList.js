import React from 'react';
import PostCard from './PostCard.js';
import { LOREM_IPSUM } from "./config"

function PostList(){
  //DISPATCH a thunk action which would make an api call to get the posts
  //USESELECTOR GRABS ALL POSTS 
  const postList = {
    'uniqueId': { title: "First post!", description: "The best post ever", body: LOREM_IPSUM, comments: {commentId: {text: ''}} }
  }



  return(
    <div>
      {Object.keys(postList).map(key => (
      <PostCard 
      key={key}
      id={key}
      postDetails={postList[key]}
      />))}
    </div>
  )
}

export default PostList;
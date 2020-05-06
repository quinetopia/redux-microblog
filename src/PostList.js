import React from 'react';
import PostCard from './PostCard.js';
import { LOREM_IPSUM } from "./config"

function PostList(){
  // grab state of list of posts
  const postList = {
    'uniqueId': { title: "First post!", description: "The best post ever", body: LOREM_IPSUM, comments: [] }
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
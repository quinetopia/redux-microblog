import React, {useEffect} from 'react';
import PostCard from './PostCard.js';
import {useDispatch, useSelector, shallowEqual} from "react-redux";
import { getPostsFromAPI, updateVotesWithAPI } from "./actionCreators";


// Makes call to db to get brief version of posts and lists them 
function PostList(){
  const postIdsToPostData = useSelector(st => st.posts, shallowEqual);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getPostsFromAPI());
  }, [dispatch]);

  function handleVotes(postId, direction) {
    dispatch(updateVotesWithAPI(postId, direction));
  }

  function sortPostsByVotes() {
    let posts = Object.entries(postIdsToPostData);

    return posts.sort((post1, post2) => {
      return post2[1].votes - post1[1].votes
    })
  }

  return(
    <div>
      {sortPostsByVotes().map(([postId, postData]) => (
      <PostCard 
      key={postId}
      postId={postId}
      postData={postData}
      handleVotes={handleVotes}/>))}
    </div>
  )
}

export default PostList;

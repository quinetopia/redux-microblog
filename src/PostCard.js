import React from 'react';
import { Link } from "react-router-dom";

// Displays condensed details of a post, links to detailed route
function PostCard({postId, postData: {title, description, votes}, handleVotes}){
  return(
    <div>
      <Link to={`/${postId}`}>{title}</Link>
      <p>{description}</p>
      <div>
        <p>Votes: {votes}</p>
        <button onClick={() => handleVotes(postId, "up")}>Up Vote</button>
        <button onClick={() => handleVotes(postId, "down")}>Down Vote</button>
      </div>
    </div>
  )
}

export default PostCard;
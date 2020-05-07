import React from 'react';
import { Link } from "react-router-dom";

// Displays condensed details of a post, links to detailed route
function PostCard({id, postDetails: {title, description}}){
  return(
    <div>
      <Link to={`/${id}`}>{title}</Link>
      <p>{description}</p>
    </div>
  )
}

export default PostCard;
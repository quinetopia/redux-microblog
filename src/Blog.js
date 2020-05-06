import React from "react";
import PostList from './PostList';

/* Blog: shows navBar and renders PostList component */
function Blog() {
  return (
    <div>
      <h1> Welcome to Microblog, our innovative site for communicating on the information superhighway </h1>
      <PostList />
    </div>

  )
}

export default Blog;
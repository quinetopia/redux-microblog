
import React from 'react';
import NewCommentForm from './NewCommentForm';

/* grabbing all comments from post state by the posts 
unique id that comes through as a prop
render new comment form*/
// comments: {id: {text: 'Hey!'}} 


function Comments({ comments, handleDelete, postId }) {

  return (
    <div>
      <div>
        {Object.entries(comments).map(([commentId, commentData]) =>
          (<div key={commentId}>
            <span>{commentData.text}</span>
            <button onClick={() => handleDelete(commentId)}>X</button>
          </div>))}
      </div>
        <NewCommentForm postId={postId}/>
    </div>
    
  )
}

export default Comments;
/* grabbing all comments from post state by the posts 
unique id that comes through as a prop
render new comment form*/
// comments: {id: {text: 'Hey!'}} 

import React from 'react';
import NewCommentForm from './NewCommentForm';

function Comments ({comments}){

  function handleDelete(){
    console.log('delete this comment');
  }
  return (
    <div>
    <div>
      {Object.keys(comments).map(commentId => 
      <span key={commentId}>{comments[commentId].text}</span>)}
      <button onClick={handleDelete}>X</button>
      <br/>
    </div>
        <NewCommentForm />
    </div>
  )
}

export default Comments;
/* grabbing all comments from post state by the posts 
unique id that comes through as a prop
render new comment form*/
// comments: {id: {text: 'Hey!'}} 

import React from 'react';
import NewCommentForm from './NewCommentForm';

function Comments({ comments, handleDelete, id }) {
  console.log('IN COMMENTS PAGE', comments)

  //handle when there are no comments and comments is undefined use loading

  return (
    <div>
      <div>
        {Object.entries(comments).map(([commentId, commentData]) =>
          (<div key={commentId}>
            <span>{commentData.text}</span>
            <button onClick={() => handleDelete(id)}>X</button>
          </div>))}
      </div>
      <NewCommentForm />
    </div>
  )
}

export default Comments;
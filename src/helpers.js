// [
//   {
//     "id": 1,
//     "title": "First Post",
//     "description": "Best post ever!",
//     "votes": 0
//   },
//   {
//     "id": 2,
//     "title": "Second Post",
//     "description": "A very good post!",
//     "votes": 0
//   }
// ]

// {
//   "id": 1,
//   "title": "First Post",
//   "description": "Best post ever!",
//   "body": "Everyone loves posting first. I win!",
//   "votes": 0,
//   "comments": [
//     {
//       "id": 1,
//       "text": "This is a really great post."
//     },
//     {
//       "id": 2,
//       "text": "I learned so much reading this."
//     }
//   ]
// }


export function structurePostsData(postsApiData) {
  const stateData = {};

  for (let { id, title, description, votes } of postsApiData) {
    stateData[id] = { title, description, votes };
  }

  return stateData;

}

export function structurePostData({ id, title, description, body, votes, comments }) {
  let postData = {};
  const commentData = {};

  for (let { id, text } of comments) {
    commentData[id] = { text }
  }

  postData = { title, description, body, votes, comments: commentData }
  return postData;

}
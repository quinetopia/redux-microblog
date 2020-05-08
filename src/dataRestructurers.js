

// Structures data to make it easy to use in rootReducer
export function structurePostsData(postsApiData) {
  const stateData = {};

  for (let { id, title, description, votes } of postsApiData) {
    stateData[id] = { title, description, votes };
  }

  return stateData;

}

// Structures data to make it easy to use in rootReducer
export function structurePostData(data) {

  let postData = {};
  const commentData = {};

  if (data.comments) {
    for (let { id, text } of data.comments) {
      commentData[id] = { text };
    }
  }
  const { title, description, body, votes } = data;

  postData = { title, description, body, votes, comments: commentData };
  return postData;

}

// Structures data to make it easy to use in rootReducer
export function structureUpdatedPostData({ title, description, body}) {

  return {title, body, description};

}


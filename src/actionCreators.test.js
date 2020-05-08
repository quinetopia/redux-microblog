import {
  gotPosts,
  gotPost
 } from "./actionCreators"
import {
  GET_POSTS,
  GET_POST, 
} from "./actionTypes"

const ID1 = 1;
const POSTDATA1 = {title: "Title1", description: "description1", votes: 3}
const POSTDATA2 = {
  title: "Title", 
  description: "description", 
  body: "body", 
  votes: 9, 
  comments: {1:{text: "comment"}, 2: {text: "comment2"}}
}

describe("action creators", () => {
  it("should handle got posts", () => {
    expect(gotPosts(POSTDATA1, ID1)).toEqual({
      type: GET_POSTS,
      postId: 1,
      postsData: {title: "Title1", description: "description1", votes: 3}
    });
  });


  // export function gotPost(postData, postId) {
  //   return { type: GET_POST, postData, postId};
  // }

  it("should handle got post", () => {
    expect(gotPost(POSTDATA2, ID1)).toEqual({
      type: GET_POST,
      postId: 1,
      postData: {
        title: "Title", 
        description: "description", 
        body: "body", 
        votes: 9, 
        comments: {1:{text: "comment"}, 2: {text: "comment2"}}
      }
    });
  });
  });
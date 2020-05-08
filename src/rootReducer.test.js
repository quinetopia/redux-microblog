import rootReducer from "./rootReducer";

const INITIAL_STATE = {
  posts: {},
  error: null,
  loading: true
};
const STATE1 = {
  error : null,
loading: false,
posts: {
  1 : {title: "Title1", description: "description1", votes: 3},
  2 : {title: "Title2", description: "description2", votes: 2}
}
}

describe("rootReducer", () => {
  it("should return the initial state", () => {
    expect(rootReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  it("should handle GET_POSTS", () => {
    expect(
      rootReducer(INITIAL_STATE, {
        type: "GET_POSTS",
        postsData: {
          1 : {title: "Title1", description: "description1", votes: 3},
          2 : {title: "Title2", description: "description2", votes: 2}
        }
      })
    ).toEqual(STATE1);
  });
});
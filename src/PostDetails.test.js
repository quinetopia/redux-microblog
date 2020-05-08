import React from "react";
import { render, waitForElement } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PostList from "./PostList";
// import axiosMock from "axios";

process.env.NODE_ENV = 'test';

describe("PostDetails", function() {
  it("renders without crashing", async function() {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/"]}>
        <PostList />
      </MemoryRouter>
    );
    await waitForElement(() => getByText("Votes:"));
  });
});
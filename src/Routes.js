import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Blog from "./Blog";
import NewPostForm from "./NewPostForm";
import PostDetails from "./PostDetails";

/** Routes for application. */

function Routes() {
  return (
    
    <Switch>
      <Route path="/" exact>
        <Blog />
      </Route>
      <Route path="/new" exact>
        <NewPostForm />
      </Route>
      <Route path="/:id" exact>
        <PostDetails />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
}

export default Routes;
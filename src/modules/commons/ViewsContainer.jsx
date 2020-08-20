import React from "react";
import { Route, Switch } from "react-router";
import List from "../home/Listing";
import Editor from "../home/Editor";

const ViewsContainer = () => (
  <Switch>
    <Route exact path="/ReactList" component={List} />
    <Route path="/edit/:id" component={Editor} />
    <Route render={() => <div>DEFAULT</div>} />
  </Switch>
);

export default ViewsContainer;

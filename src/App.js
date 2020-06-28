import React from "react";
import { Redirect, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Main from "./v1/containers/main/main";
import Blog from "./v1/pages/blog/blog";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/blog/" component={Blog} />
        <Redirect from="/blog/*" to="/blog/" />
      </Switch>
    </Router>
  );
}

export default App;

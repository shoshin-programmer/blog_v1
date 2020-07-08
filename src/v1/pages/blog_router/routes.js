import React from "react";
import { Route, Switch } from "react-router-dom";

import RecentPage from "../blog/subpages/recent";
import IndividualPost from "../blog/subpages/post/post";
import TopPosts from "../blog/subpages/top_posts";
import Topics from "../blog/subpages/topics";
import Search from "../blog/subpages/search";

export default class BlogRouter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Switch>
        <Route exact path="/blog/" component={RecentPage} />
        <Route exact path="/blog/recent" component={RecentPage} />
        <Route exact path="/blog/top_posts" component={TopPosts} />
        <Route exact path="/blog/topics" component={Topics} />
        <Route exact path="/blog/search" component={Search} />
        <Route path={`${this.props.path}/:id`} component={IndividualPost} />
      </Switch>
    );
  }
}

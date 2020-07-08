import React from "react";
import Main from "./v1/containers/main/main";
import Blog from "./v1/pages/blog/blog";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: () => <Main /> },
  {
    path: "/blog",
    key: "BLOG",
    component: () => <Blog />,
    routes: [
      {
        // path: "blog/recent",
        // key: "RECENTBLOG",
        // exact: true,
        // component: () => <h1>App Index</h1>
      }
    ]
  }
];

export default ROUTES;

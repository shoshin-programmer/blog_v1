import React from "react";
import "./styles.css";
import { Icon } from "rsuite";
import {
  useRouteMatch,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";
import BlogRouter from "../blog_router/routes";

export default function Blog() {
  let { path, url } = useRouteMatch();
  let options = [
    {
      title: "Recent",
      icon: "clock-o",
      link: "recent"
    },
    {
      title: "Top Posts",
      icon: "creative",
      link: "top_posts"
    },
    {
      title: "Topics",
      icon: "list",
      link: "topics"
    },
    {
      title: "Search",
      icon: "search",
      link: "search"
    }
  ];
  return (
    <Router>
      <div className="main-wrap">
        <ul className="nav-wrap">
          <a
            href="/"
            style={{
              color: "#34c3ff"
            }}
          >
            <li className="nav-item">
              <Icon icon={"home"} size={"2x"} />
              <p>BACK</p>
            </li>
          </a>
          {options.map((option, index) => (
            <NavLink
              to={`${url}/${option.link}`}
              activeClassName="active-blog"
              key={index}
            >
              <li className="nav-item">
                <Icon icon={option.icon} size={"2x"} />
                <p>{option.title}</p>
              </li>
            </NavLink>
          ))}
        </ul>
        <div className="blog-container">
          <BlogRouter path={path} />
        </div>
      </div>
    </Router>
  );
}

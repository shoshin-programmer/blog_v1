import React from "react";
import "./styles.css";
import { Icon } from "rsuite";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import BlogRouter from "../blog_router/routes";

export default class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      options: [
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
      ]
    };
  }
  componentDidMount() {}

  render() {
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
            {this.state.options.map((option, index) => (
              <NavLink to={option.link} activeClassName="active-blog">
                <li className="nav-item" key={index}>
                  <Icon icon={option.icon} size={"2x"} />
                  <p>{option.title}</p>
                </li>
              </NavLink>
            ))}
          </ul>
          <div className="blog-container">
            <BlogRouter />
          </div>
        </div>
      </Router>
    );
  }
}

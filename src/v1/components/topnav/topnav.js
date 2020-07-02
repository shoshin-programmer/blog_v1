import React from "react";
import "./topnav.css";

export default class TopNav extends React.Component {
  constructor() {
    super();
    this.state = { menuOpen: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }
  render() {
    return (
      <React.Fragment>
        <div className={`sidebar ${this.state.menuOpen ? "sidebar-open" : ""}`}>
          <div
            className={`menu-btn ${this.state.menuOpen ? "menu-open" : ""}`}
            onClick={this.toggleMenu}
          >
            <div className="menu-icon"></div>
          </div>
          <ul className="menu-list">
            <li>
              <a href="#about-container">about</a>
            </li>
            <li>
              <a href="#work-container">work</a>
            </li>
            <li>
              <a href="/blog/recent">blog</a>
            </li>
            <li>
              <a href="/#">resume</a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

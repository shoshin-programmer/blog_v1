import React from "react";
import "rsuite/dist/styles/rsuite-dark.css";
import SideNavigation from "../../components/sidenav/sidenav";
import TopNav from "../../components/topnav/topnav";
import MainContent from "../../pages/homepage/content.js";
import "./main.css";

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    return (
      <React.Fragment>
        <TopNav />
        <div className="loading-wrap">
          <div className="loading">
            <div className="obj"></div>
            <div className="obj"></div>
            <div className="obj"></div>
            <div className="obj"></div>
            <div className="obj"></div>
            <div className="obj"></div>
            <div className="obj"></div>
            <div className="obj"></div>
            <div className="obj"></div>
            <div className="obj"></div>
          </div>
        </div>
        <SideNavigation />
        <div>
          <MainContent />
        </div>
      </React.Fragment>
    );
  }
}

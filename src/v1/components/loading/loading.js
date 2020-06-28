import React from "react";
import "./styles.css"

export default class BlogLoading extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="blog-loading-wrap">
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
    );
  }
}

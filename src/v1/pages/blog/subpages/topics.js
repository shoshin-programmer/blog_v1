import React from "react";
import BlogLoading from "../../../components/loading/loading";
import "./styles.css";
import axios from "axios";

export default class Topics extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: []
    };
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/tag/").then(response => {
      this.setState({
        tags: response.data
      });
      console.log(response.data);
    });
  }
  render() {
    return (
      <React.Fragment>
        <BlogLoading />
        <div className="blog-instance">
          <div className="recent-header-wrap">
            <div className="recent-title">topics</div>
          </div>
          <div className="all-topics-container">
            {this.state.tags.map((tag, index) => (
              <div className="topic-wrap" key={index}>
                <img className="topic-img" src={tag.img} alt={tag.name} />
                <div className="topic-title">{tag.name}</div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

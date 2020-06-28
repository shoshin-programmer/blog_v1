import React from "react";
import BlogLoading from "../../../components/loading/loading";
import "./styles.css";

export default class Topics extends React.Component {
  constructor() {
    super();
    this.state = {
      topics: [
        {
          topic: "algorithms",
          img:
            "https://images.unsplash.com/photo-1583115260445-f95fe37202ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
        },
        {
          topic: "journey",
          img:
            "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80",
        },
        {
          topic: "advice",
          img:
            "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80",
        },
        {
          topic: "learnings",
          img:
            "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80",
        },
      ],
    };
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
            {this.state.topics.map((topic) => (
              <div className="topic-wrap">
                <img className="topic-img" src={topic.img} alt={topic.topic} />
                <div className="topic-title">{topic.topic}</div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

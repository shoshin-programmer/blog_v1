import React from "react";
import BlogLoading from "../../../components/loading/loading";
import "./styles.css";

export default class TopPosts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          topic: "algorithms",
          img:
            "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80",
          title: "Starting with Programming",
          text:
            "Have you decided to be a programmer, or you are just curious about programming? Starting with programming starts with the mindset and the expectations of what you are trying to achieve. ",
          last_updated: "March 14, 2020"
        },
        {
          topic: "algorithms",
          img:
            "https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2251&q=80",
          title: "Starting with Programming",
          text:
            "Have you decided to be a programmer, or you are just curious about programming? Starting with programming starts with the mindset and the expectations of what you are trying to achieve. ",
          last_updated: "March 14, 2020"
        }
      ]
    };
  }
  render() {
    return (
      <React.Fragment>
        <BlogLoading />
        <div className="blog-instance">
          <div className="recent-header-wrap">
            <div className="recent-title">
              top
              <span style={{ color: "#fff" }}>
                <br /> posts
              </span>
            </div>
          </div>
          <div className="post-container">
            {this.state.posts.map((post, index) => (
              <div className="recent-post-wrap" key={index}>
                <img src={post.img} className="post-img" alt={post.title} />
                <div className="each-recent-post">
                  <div className="post-category">Topic: {post.topic}</div>
                  <div className="post-title">{post.title}</div>
                  <div className="post-text">{post.text}</div>
                  <div className="post-date">{post.last_updated}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

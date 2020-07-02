import React from "react";
import BlogLoading from "../../../components/loading/loading";
import "./styles.css";
import axios from "axios";
import moment from "moment";

export default class RecentPage extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/post/").then(response => {
      this.setState({
        posts: response.data
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
            <div className="recent-title">
              recent
              <span style={{ color: "#fff" }}>
                <br />
                posts
              </span>
            </div>
          </div>
          <div className="post-container">
            {this.state.posts.map(post => (
              <div className="recent-post-wrap">
                <div className="post-img-wrap">
                  <img
                    src={post.post_img}
                    className="post-img"
                    alt={post.title}
                  />
                </div>
                <div className="each-recent-post">
                  <div className="post-category">Topic: {post.topic}</div>
                  <div className="post-title">{post.title}</div>
                  <div className="post-text">{post.content}</div>
                  <div className="post-date">
                    {moment(post.last_updated).format("LL")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
/*
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
*/

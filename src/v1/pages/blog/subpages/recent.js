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
            {this.state.posts.map((post, index) => (
              <div className="recent-post-wrap" key={index}>
                <div className="post-img-wrap">
                  <img
                    src={post.post_img}
                    className="post-img"
                    alt={post.title}
                  />
                </div>
                <div className="each-recent-post">
                  <div className="post-category">
                    Topic:{" "}
                    {post.tag.map((tag, index) => (
                      <span key={index}>{tag.name}, </span>
                    ))}
                    {"..."}
                  </div>
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

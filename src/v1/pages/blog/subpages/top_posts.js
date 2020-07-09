import React from "react";
import BlogLoading from "../../../components/loading/loading";
import "./styles.css";
import axios from "axios";

export default class TopPosts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          title: "",
          tag: [
            {
              name: "",
              img: ""
            }
          ],
          content: "",
          post_img: "",
          view_count: ""
        }
      ]
    };
  }
  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/top_posts").then(response => {
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
              top
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
                  <div className="post-date">views:{post.view_count}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

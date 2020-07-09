import React from "react";
import BlogLoading from "../../../components/loading/loading";
import "./styles.css";
import axios from "axios";

export default class Topics extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: [
        // {
        //   topic: "algorithms",
        //   img:
        //     "https://images.unsplash.com/photo-1583115260445-f95fe37202ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
        // },
        // {
        //   topic: "journey",
        //   img:
        //     "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        // },
        // {
        //   topic: "advice",
        //   img:
        //     "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        // },
        // {
        //   topic: "learnings",
        //   img:
        //     "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
        // }
      ]
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

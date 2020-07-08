import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogLoading from "../../../../components/loading/loading";
import axios from "axios";

export default function IndividualPost(props) {
  const [post, setPost] = useState({
    title: "Post Title",
    post_img: "",
    content: "",
    tag: []
  });
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(`http://127.0.0.1:8000/api/post/${id}/`);
      setPost(response.data);
      console.log(response.data);
    };
    fetchData();
  }, [id]);

  return (
    <React.Fragment>
      <BlogLoading />
      <div className="blog-instance">
        <div className="recent-header-wrap">
          <div className="recent-title">{post.title}</div>
        </div>
        <div className="post-container">
          <div className="recent-post-wrap">
            <div className="post-img-wrap">
              <img src={post.post_img} className="post-img" alt={post.title} />
            </div>
            <div className="each-recent-post">
              <div className="post-category">
                {post.tag.map((tag, index) => (
                  <span key={index}>{tag.name} </span>
                ))}
              </div>
              <div className="post-text">{post.content}</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

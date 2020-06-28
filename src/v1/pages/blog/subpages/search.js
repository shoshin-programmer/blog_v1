import React from "react";
import BlogLoading from "../../../components/loading/loading";
import "./styles.css";

export default function Search(props) {
  return (
    <React.Fragment>
      <BlogLoading />
      <div className="blog-instance">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "90vh",
            color: "#8892b0"
          }}
        >
          <h1>Search will be implemented when there are more posts.</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

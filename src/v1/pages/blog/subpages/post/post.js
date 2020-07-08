import React from "react";
import { useParams } from "react-router-dom";
import BlogLoading from "../../../../components/loading/loading";

export default function IndividualPost(props) {
    let { id } = useParams();
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
          <h1>word{id}</h1>
        </div>
      </div>
    </React.Fragment>
  );
}

import { useState } from "react";

function PostItem(props) {
  const { id, title, body } = props.post;
  const { idx } = props;

  return (
    <div className="Post__Item">
      <div className="Post__Item__Content">
        <h2>
          {idx + 1}. {title}
        </h2>
        <p>{body}</p>
      </div>
      <div className="Post__Item__Buttons">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
}

export default PostItem;

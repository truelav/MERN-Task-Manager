import { useState } from "react";

function PostItem(props) {
  const { id, title, body } = props.post;
  const { idx } = props;
  const { deletePost } = props;
  const { currentPage } = props;

  return (
    <div className="Post__Item">
      <div className="Post__Item__Content">
        <h2>
          {id}. {title}
        </h2>
        <p>{body}</p>
      </div>
      <div className="Post__Item__Buttons">
        <button onClick={() => deletePost(props.post)}>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
}

export default PostItem;

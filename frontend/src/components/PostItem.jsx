import { useState } from "react";

function PostItem() {
  return (
    <div className="Post__Item">
      <div className="Post__Item__Content">
        <h2>1. Javascript</h2>
        <p>Javascript is a Programming language</p>
      </div>
      <div className="Post__Item__Buttons">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </div>
  );
}

export default PostItem;

import { useState, useEffect } from "react";
import PostItem from "./PostItem";

function PostList({ posts, deletePost, currentPage }) {
  const [paginatedPosts, setPaginatedPosts] = useState([]);

  useEffect(() => {
    let start = (currentPage - 1) * 10;
    let end = currentPage * 10 - 1;
    setPaginatedPosts([...posts.slice(start, end)]);
  }, [currentPage]);

  if (posts.length === 0) {
    return (
      <div>
        <h2>There are no posts available</h2>
      </div>
    );
  }
  return (
    <div className="PostList">
      <h2>List of Posts</h2>
      {paginatedPosts.map((post, idx) => {
        return (
          <PostItem
            currentPage={currentPage}
            post={post}
            deletePost={deletePost}
            key={post.id}
            idx={idx}
          />
        );
      })}
    </div>
  );
}

export default PostList;

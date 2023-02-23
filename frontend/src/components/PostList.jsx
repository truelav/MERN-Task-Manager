import PostItem from "./PostItem";

function PostList({ posts, deletePost }) {
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
      {posts.map((post, idx) => {
        return (
          <PostItem
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

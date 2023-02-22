import PostItem from "./PostItem";

function PostList({ posts, deletePost }) {
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

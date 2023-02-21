import PostItem from "./PostItem";

function PostList(props) {
  const { posts } = props;

  return (
    <div className="PostList">
      <h2>List of Posts</h2>
      {posts.map((post) => {
        return <PostItem post={post} key={post.id} />;
      })}
    </div>
  );
}

export default PostList;

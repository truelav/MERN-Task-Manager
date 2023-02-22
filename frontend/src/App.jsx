import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "This is a programming Language" },
    { id: 2, title: "Python", body: "This is a programming Language" },
    { id: 3, title: "C++", body: "This is a programming Language" },
  ]);

  const createPost = (newPost) => {};

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm posts={posts} setPosts={setPosts} />
      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
}

export default App;

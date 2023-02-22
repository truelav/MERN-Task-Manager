import { useState } from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

import "./styles/App.css";
import MySelect from "./UI/MySelect";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "This is a programming Language" },
    { id: 2, title: "Python", body: "This is a programming Language" },
    { id: 3, title: "C++", body: "This is a programming Language" },
  ]);
  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {};

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    console.log(sort);
  };

  return (
    <div className="App">
      <PostForm posts={posts} setPosts={setPosts} />

      <MySelect
        defaultValue="Sorting By"
        options={[
          { value: "title", name: "By Title" },
          { value: "title", name: "By Body" },
        ]}
      />

      <PostList posts={posts} deletePost={deletePost} />
    </div>
  );
}

export default App;

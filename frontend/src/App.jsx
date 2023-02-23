import { useMemo, useState } from "react";
import axios from "axios";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

import "./styles/App.css";
import MySelect from "./UI/MySelect";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");

  const fetchPosts = async (limit, page) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit || 15,
          _page: page || 1,
        },
      }
    );
    console.log(response.data);
    setPosts(response.data);
  };

  useMemo(() => {
    fetchPosts(15, 1);
  }, []);

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

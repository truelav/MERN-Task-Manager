import { useMemo, useState } from "react";
import axios from "axios";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./UI/MySelect";

import "./styles/App.css";
import PaginationComp from "./UI/pagination/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSort, setSelectedSort] = useState("");

  const fetchPosts = async (limit, page) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit || 25,
          _page: page || 1,
        },
      }
    );
    console.log(response.data);
    setPosts(response.data);
  };

  useMemo(() => {
    fetchPosts(25, 1);
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
      <PaginationComp totalPages={posts.length} currentPage={currentPage} />
    </div>
  );
}

export default App;

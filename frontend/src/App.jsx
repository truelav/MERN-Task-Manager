import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./UI/MySelect";
import MyInput from "./UI/MyInput";

import "./styles/App.css";
import PaginationComp from "./UI/pagination/Pagination";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSort, setSelectedSort] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchPosts = async (limit, page) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _limit: limit || 10,
          _page: page || 1,
        },
      }
    );
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts(100, 1);
  }, []);

  const createPost = (newPost) => {};

  const deletePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    console.log(sort);
  };

  const changePage = (newPage) => {
    setCurrentPage(newPage);
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

      <MyInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
      />

      <PostList
        posts={posts}
        deletePost={deletePost}
        currentPage={currentPage}
      />
      <PaginationComp
        totalPages={posts.length}
        currentPage={currentPage}
        changePage={changePage}
      />
    </div>
  );
}

export default App;

import { useState } from "react";
import PostList from "./components/PostList";
import Form from "./components/Form";

import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "This is a programming Language" },
    { id: 2, title: "Python", body: "This is a programming Language" },
    { id: 3, title: "C++", body: "This is a programming Language" },
  ]);

  return (
    <div className="App">
      <Form />
      <PostList posts={posts} />
    </div>
  );
}

export default App;

import MyInput from "../UI/MyInput";
import MyButton from "../UI/MyButton";
import { useState } from "react";

export default function PostForm({ posts, setPosts }) {
  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
  });

  const createPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...newPost, id: Date.now() }]);
    setNewPost({ title: "", body: "" });
  };

  return (
    <div className="Form">
      <form>
        <MyInput
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          type="text"
          placeholder="Post Title"
        />
        <MyInput
          value={newPost.body}
          onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
          type="text"
          placeholder="Post Body"
        />
        <MyButton type="submit" onClick={createPost}>
          Create Post
        </MyButton>
      </form>
    </div>
  );
}

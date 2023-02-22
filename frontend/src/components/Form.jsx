import MyInput from "../UI/MyInput";
import MyButton from "../UI/MyButton";
import { useState } from "react";

export default function Form({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const createPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };

    setPosts([...posts, newPost]);
  };

  return (
    <div className="Form">
      <form>
        <MyInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Post Title"
        />
        <MyInput type="text" placeholder="Post Body" />
        <MyButton type="submit" onClick={createPost}>
          Create Post
        </MyButton>
      </form>
    </div>
  );
}

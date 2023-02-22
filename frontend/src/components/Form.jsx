import MyInput from "../UI/MyInput";
import MyButton from "../UI/MyButton";
import { useState } from "react";

export default function Form() {
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");
  const [newPost, setNewPost] = useState({});

  const createPost = (e) => {
    e.preventDefault();
    console.log(header);
    console.log(body);
  };

  return (
    <div className="Form">
      <form>
        <MyInput
          value={header}
          onChange={(e) => setHeader(e.target.value)}
          type="text"
          placeholder="Post Header"
        />
        <MyInput type="text" placeholder="Post Body" />
        <MyButton type="submit" onClick={createPost}>
          Create Post
        </MyButton>
      </form>
    </div>
  );
}

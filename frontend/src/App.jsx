import { useState } from "react";

import Counter from "./components/Counter";
import PostItem from "./components/PostItem";

import "./styles/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Counter />
      <PostItem />
    </div>
  );
}

export default App;

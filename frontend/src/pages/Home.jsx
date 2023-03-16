import { useEffect, useState } from "react";
import axios from "../utils/axios";

import { Tabs, Tab } from "@mui/material";

// import { Post } from "../components/Post";
// import { TagsBlock } from "../components/TagsBlock";
// import { CommentsBlock } from "../components/CommentsBlock";

const Home = () => {
  useEffect(() => {
    axios.get("/posts/posts");
  }, []);
  return (
    <>
      <Tabs value={0} aria-label="basic tabs example">
        <Tab label="Newest" />
        <Tab label="Popular" />
      </Tabs>
    </>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, Tab, Grid } from "@mui/material";

import axios from "../utils/axios";
import { fetchPosts } from "../../redux/slices/posts";

// import { Post } from "../components/Post";
// import { TagsBlock } from "../components/TagsBlock";
// import { CommentsBlock } from "../components/CommentsBlock";

const Home = () => {
  const dispatch = useDispatch();
  const { posts, tags } = useSelector((state) => state.posts);

  console.log(posts);

  useEffect(() => {
    dispatch(fetchPosts());
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

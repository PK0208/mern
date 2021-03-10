import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { useSelector } from "react-redux";

import Post from "./Post/Post";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log("AllPosts", posts);
  return (
    <>
      <h1>Posts</h1>
      <Post />
      <Post />
    </>
  );
};

export default Posts;

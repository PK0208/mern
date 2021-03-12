import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "../constants/actionTypes";

import * as api from "../api";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log("getPostsAction", data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log("GetPostsError", error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  console.log("create post api in actions", post);
  try {
    console.log("create post api in actions try");
    const { data } = await api.createPost(post);
    console.log("CreatePostsAction", data);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log("createPostError", error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  console.log("updatePost in actions", id, post);
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log("updatePostError", error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  console.log("deletePost in actions", id);
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log("Delete Action Error ", error);
  }
};

export const likePost = (id) => async (dispatch) => {
  console.log("likePost in actions", id);
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log("Like Action Error", error);
  }
};

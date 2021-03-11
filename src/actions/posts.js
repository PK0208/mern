import * as api from "../api";

//Action creators
/* 
const getPosts = () => async (dispatch) => {

    try {
        const {data} = await api.fetchPosts();
    } catch (error) {
        
    }

  const action = { type: "FETCH_ALL", payload: [] };
  //return action;
  dispatch(action);
};
 */

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log("getPostsAction", data);
    dispatch({ type: "FETCH_ALL", payload: data });
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
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log("createPostError", error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  console.log("updatePost in actions", id, post);
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log("updatePostError", error.message);
  }
};

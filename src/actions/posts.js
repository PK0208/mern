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
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log("GetPostsError", error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    console.log("create post api in actions");
    const { data } = await api.createPosts(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log("createPostError", error.message);
  }
};

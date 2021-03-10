// posts = state here
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      console.log("create post reducer");
      return [...posts, action.payload];

    default:
      return posts;
  }
};

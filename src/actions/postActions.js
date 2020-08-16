import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => (dispatch) => {
  console.log("running action");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: FETCH_POSTS,
        payload: data,
      })
    );
};

export const newPost = (postData) => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: NEW_POST,
        payload: data,
      })
    );
};

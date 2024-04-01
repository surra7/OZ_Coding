import axios from "axios";

// export const fetchPosts = (): any => {
//   return async function fetchPostsThunk(dispatch: any, getState: any) {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     dispatch({ type: "FETCH_POSTS", payload: response.data });
//   };
// };

// 모던한 방식으로 작성 es2015 형태
export const fetchPosts = (): any => async (dispatch: any, getState: any) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

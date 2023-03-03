import { useState, createContext, useCallback } from "react";

const PostContext = createContext({
  posts: [],
  post: null,
  fetchPosts: null,
  getPost: null,
});

export default PostContext;

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = useCallback(() => {
    fetch("/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  const getPost = (postId) => {
    return posts.find((post) => post.id === postId);
  };

  return (
    <PostContext.Provider value={{ fetchPosts, posts, getPost }}>
      {children}
    </PostContext.Provider>
  );
};

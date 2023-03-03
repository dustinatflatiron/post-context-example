import { useContext, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts";
import Post from "./components/Post";
import PostContext from "./context/post";

const linkStyles = {
  margin: "4px",
};

function App() {
  const { fetchPosts } = useContext(PostContext);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div className="App">
      <header className="App-header">
        <Link style={linkStyles} to="/posts">
          View Posts
        </Link>
      </header>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import { PostProvider } from "./context/post";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PostProvider>
        <App />
      </PostProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import "./App.css";
import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostForm />
      </header>
      <Posts />
    </div>
  );
}

export default App;

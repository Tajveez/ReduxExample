import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import Posts from "./Components/Posts";
import PostForm from "./Components/PostForm";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <PostForm />
          {/* https://youtu.be/93p3LxR9xfM?t=1511 */}
        </header>
        <Posts />
      </div>
    </Provider>
  );
}

export default App;

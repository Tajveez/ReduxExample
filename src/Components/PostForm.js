import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  render() {
    return (
      <div>
        <h5>Add a new Post</h5>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.onChange}
              placeholder="Enter Post Title"
            />
          </div>
          <div>
            <input
              type="text"
              value={this.state.body}
              onChange={this.onChange}
              name="body"
              placeholder="Enter Post body"
            />
          </div>
          <div>
            <input type="submit" name="submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default PostForm;

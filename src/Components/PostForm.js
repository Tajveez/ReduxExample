import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { newPost } from "../actions/postActions";

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

    this.props.newPost(post);
    this.setState({
      title: "",
      body: "",
    });
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
          <br />
          <div>
            <textarea
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

PostForm.propTypes = {
  newPost: PropTypes.func.isRequired,
};

export default connect(null, { newPost })(PostForm);

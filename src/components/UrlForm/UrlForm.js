import React, { Component } from "react";

class UrlForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      long_url: "",
    };
  }

  handleNameChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newUrl = {
      ...this.state,
    };
    this.props.addUrl(newUrl);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ title: "", long_url: "" });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Title..."
          name="title"
          value={this.state.title}
          onChange={(e) => this.handleNameChange(e)}
        />

        <input
          type="text"
          placeholder="URL..."
          name="long_url"
          value={this.state.long_url}
          onChange={(e) => this.handleNameChange(e)}
        />

        <button className="submit-button" onClick={(e) => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    );
  }
}

export default UrlForm;

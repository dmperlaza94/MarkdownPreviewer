import React, { Component } from "react";
import "./App.css";

class TextInput extends Component {
  render() {
    return (
      <textarea
        id="editor"
        name="input"
        cols="30"
        rows="5"
        placeholder="# Welcome to my React Markdown Previewer!"
        value={this.props.value}
        onChange={this.props.handleInput}
      ></textarea>
    );
  }
}

export default TextInput;

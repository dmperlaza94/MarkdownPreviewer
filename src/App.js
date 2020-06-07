import React, { Component } from "react";
import "./App.css";
import TextInput from "./textinput";
import TextOutput from "./componentes/text-salida";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(e) {
    this.setState({
      userInput: e.target.value,
    });
    console.log(this.state.userInput);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Markdown Previewer Fcc</h1>
        </header>

        <div className="container">
          <TextInput
            handleInput={this.handleUserInput}
            value={this.state.userInput}
          />
        </div>
        <div>
          <TextOutput input={this.state.userInput} />
        </div>

        <footer>Creado por Diana Paniagua</footer>
      </div>
    );
  }
}

export default App;

import logo from "./logo.svg";
import { Component } from "react";

export class MainHeaderClass extends Component {
  state = {
    count: 0,
    initialMessage: "Olá!",
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.props.message}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Incrementar
        </button>
        <p>Valor atual: {this.state.count}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Componente via classe
        </a>
      </header>
    );
  }
}

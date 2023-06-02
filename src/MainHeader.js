import logo from "./logo.svg";

export const MainHeader = (props) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />

    <p>{props.message}</p>

    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Isso é um componente que está sendo importado por meio do App
    </a>
  </header>
);

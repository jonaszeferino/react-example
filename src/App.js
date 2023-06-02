import "./App.css";
import { MainHeader } from "./MainHeader";
import { MainHeaderClass } from "./MainHeaderClass";

function App() {
  return (
    <>
      <div className="App">
        <MainHeader message="Olá Pessoal" />
      </div>

      <div className="App">
        <MainHeaderClass message="Olá Pessoal" />
      </div>
    </>
  );
}

export default App;

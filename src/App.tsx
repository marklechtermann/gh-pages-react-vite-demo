import { useState } from "react";
import logoImage from "./assets/logo.png";
import css from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <img src={logoImage} className={css.logo} alt="React logo" />
      </div>
      <h1>It's a demo</h1>
    </div>
  );
}

export default App;

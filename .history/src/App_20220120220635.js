import logo from './logo.svg';
import './App.css';
import {useSelector} from "react-redux";

function App() {

  const state = useSelector((state) => state);
  const account = useSelector((state) => state.account);

  console.log(state);
  console.log(account);  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

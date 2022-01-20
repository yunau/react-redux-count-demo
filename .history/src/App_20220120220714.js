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
      
    </div>
  );
}

export default App;

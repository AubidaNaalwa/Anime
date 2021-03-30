import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LogIn from './LogIn/LogIn'
import './App.css';

function App() {
  return (
    <Router>
      <LogIn />
    </Router>
  );
}

export default App;

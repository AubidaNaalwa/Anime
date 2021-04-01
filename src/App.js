import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { observer, inject } from 'mobx-react'
import LogIn from './LogIn/LogIn'
import Home from './Home/Home'
import './App.css';

function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => props.userStore.checkIfLoggedIn ? <Home /> : <LogIn />} />
        <Route>
          {props.userStore.setLoggedOut()}
          <LogIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default inject("userStore")(observer(App))

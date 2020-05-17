import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import signInHome from "./pages/signInHome";
import userHome from "./pages/userHome";
import userProfile from "./pages/userProfile";
import userRegister from "./pages/userRegister";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={signInHome} />
        <Route exact path="/userhome" component={userHome} />
        <Route exact path="/profile" component={userProfile} />
        <Route exact path="/register" component={userRegister} />
      </Switch>
    </Router>
  );
}

export default App;

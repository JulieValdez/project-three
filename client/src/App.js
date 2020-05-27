import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import signInHome from "./pages/signInHome";
import userHome from "./pages/userHome";
import userProfile from "./pages/userProfile";
import userRegister from "./pages/userRegister";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./Auth";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={signInHome} />
          <PrivateRoute exact path="/home" component={signInHome} />
          <Route exact path="/userhome" component={userHome} />
          <Route exact path="/profile" component={userProfile} />
          <Route exact path="/register" component={userRegister} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;

import React, { Component } from "react";
import "./App.css";
import { Route, NavLink, withRouter } from "react-router-dom";
import { Button } from "reactstrap";
import Register from "./components/register";

class App extends Component {
  logout = () => {
    localStorage.removeItem("jwt");

    this.props.history.push("/login");
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/register">Register</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/login">Login</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/jokes">Jokes</NavLink>
            &nbsp;|&nbsp;
            <Button onClick={this.logout}>Log Out</Button>
          </nav>
        </header>
        <main>
          <Route path="/register" component={Register} />
          {/* <Route path="/login" component={Login} />
          <Route path="/jokes" component={Jokes} /> */}
        </main>
      </>
    );
  }
}

export default App;

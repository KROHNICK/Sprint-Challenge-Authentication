import React, { Component } from "react";
import axios from "axios";
import Authenticate from "./auth";

class Jokes extends Component {
  state = {
    jokes: []
  };

  render() {
    return (
      <div>
        <h2>List of jokes</h2>
        <ul>
          {this.state.jokes.map(j => (
            <li key={j.id}>{j.joke}</li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    axios.get("/jokes").then(res => {
      this.setState({ jokes: res.data });
    });
  }
}

export default Authenticate(Jokes);

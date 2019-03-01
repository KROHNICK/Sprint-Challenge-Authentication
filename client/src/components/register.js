import React, { Component } from "react";
import { Button, Form, Label, Input } from "reactstrap";
import axios from "axios";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChanges = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const endpoint = "http://localhost:3300/api/register";

    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem("jwt", res.data.token);
        this.props.history.push("/jokes");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <h1>Register Page</h1>
        <div className="username">
          <Label>Username</Label>
          <Input
            type="text"
            name="username"
            value={this.username}
            placeholder="Username"
            onChange={this.handleChanges}
            required
          />
        </div>
        <div className="password">
          <Label>Password</Label>
          <Input
            type="text"
            name="password"
            value={this.password}
            placeholder="Password"
            onChange={this.handleChanges}
            required
          />
        </div>
        <Button onClick={this.handleSubmit}>Register</Button>
      </Form>
    );
  }
}

export default Register;

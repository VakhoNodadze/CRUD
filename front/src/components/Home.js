import React, { Component } from "react";
import style from "../styles/form.module.scss";

class Home extends Component {
  state = {
    first_name: "",
    last_name: "",
    address: "",
    email: ""
  };

  changeHandler = e => {
    // e.preventDefault();
    console.log("state:", this.state);
  };

  submitHandler = e => {
    e.preventDefault();
    const request = {
      query: `
        mutation {
          createEmployee(employee: {
            first_name: "${this.state.first_name}", 
            last_name: "${this.state.last_name}",
            address: "${this.state.address}", 
            email: "${this.state.email}"
          })
          {
            _id
            first_name
            last_name
            address
            email
          }
        }
      `
    };

    fetch("http://localhost:4000/graphql", {
      method: "POST",
      body: JSON.stringify(request),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .catch(err => {
        console.log(err);
      });

    this.refs.first_name.value = "";
    this.refs.last_name.value = "";
    this.refs.address.value = "";
    this.refs.email.value = "";
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitHandler} className={style.form}>
          <div className="form-group">
            <label htmlFor="first_name">First Name</label>
            <input
              type="username"
              className="form-control"
              ref="first_name"
              aria-describedby="emailHelp"
              placeholder="First Name"
              onChange={e => this.setState({ first_name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="last_name">Password</label>
            <input
              type="username"
              className="form-control"
              ref="last_name"
              placeholder="Last Name"
              onChange={e => this.setState({ last_name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="username"
              className="form-control"
              ref="address"
              placeholder="Address"
              onChange={e => this.setState({ address: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              ref="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Home;

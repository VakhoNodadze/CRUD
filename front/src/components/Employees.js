import React, { Component } from "react";
import Employee from "./Employee";
import styles from "../styles/employee.module.scss";
import style from "../styles/form.module.scss";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      edit: false,
      first_name: "",
      last_name: "",
      address: "",
      email: "",
      elemId: null
    };
  }

  componentDidMount() {
    this.getEmployees();
  }

  openModal = () => {
    this.setState(prevState => ({
      edit: !prevState.edit
    }));
  };

  getInfo = (elemId, first_name, last_name, address, email) => {
    this.setState({ elemId, first_name, last_name, address, email });
    this.openModal();
  };

  getEmployees = () => {
    const request = {
      query: `
          query {
              employees{
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
      .then(resData => {
        const employees = resData.data.employees;
        this.setState({ employees });
      })
      .catch(err => {
        console.log(err);
      });
  };

  editHandler = employeeID => {
    this.openModal();
    const request = {
      query: `
        mutation {
            updateEmployee(id: "${employeeID}", employee: {
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
  };

  deleteHandler = employeeID => {
    const request = {
      query: `
            mutation {
                removeEmployee(id: "${employeeID}")
                {
                  success
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
      .then(resData => {
        this.setState(prevState => {
          const updatedEmployees = prevState.employees.filter(employee => {
            return employee._id !== employeeID;
          });
          return { employees: updatedEmployees };
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.employees);
    const elemId = this.state.elemId;
    return (
      <React.Fragment>
        {this.state.edit && <Backdrop clicked={this.openModal} />}
        {this.state.edit && (
          // This modal form would probably be better in the modal component
          <Modal tittle="Edit Employee" onSave={() => this.editHandler(elemId)}>
            <form onSubmit={this.submitHandler} className={style.form}>
              <div className="form-group">
                <label htmlFor="first_name"></label>
                <input
                  type="username"
                  className="form-control"
                  ref="first_name"
                  value={this.state.first_name}
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
                  value={this.state.last_name}
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
                  value={this.state.address}
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
                  value={this.state.email}
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </div>
            </form>
          </Modal>
        )}
        <main className={styles.main}>
          <div className="container">
            {this.state.employees.map(employee => (
              <Employee
                key={employee._id}
                employee={employee}
                onDelete={this.deleteHandler}
                getInfo={this.getInfo}
              />
            ))}
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Employees;

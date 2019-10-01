import React from "react";

import style from "../styles/employee.module.scss";

const Employee = props => {
  const { _id, first_name, last_name, address, email } = props.employee;
  return (
    <article className={style.article}>
      <div>
        <input type="hidden" value={_id} />
        <h2>
          <span>First Name: </span>
          <span className={style.answers}>{first_name}</span>
        </h2>
        <h3>
          <span>Last Name:</span>
          <span className={style.answers}>{last_name}</span>
        </h3>
        <h3>
          <span>Email:</span>
          <span className={style.answers}>{email}</span>
        </h3>
        <h3>
          <span>Address:</span>
          <span className={style.answers}>{address}</span>
        </h3>
      </div>
      <div className={style.settings}>
        <button
          className="btn btn-primary"
          onClick={() => {
            props.getInfo(_id, first_name, last_name, address, email);
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={props.onDelete.bind(this, _id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default Employee;

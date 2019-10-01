import React from "react";
import styles from "../styles/modal.module.scss";

const modal = props => {
  return (
    <React.Fragment>
      <div className={styles.modal}>
        <header className={styles.modal_header}>
          <h1>{props.tittle}</h1>
        </header>
        <section className={styles.modal_content}>{props.children}</section>
        <section className={styles.modal_action}>
          <button
            className="btn btn-primary d-block"
            onClick={props.onSave.bind(this, props.elemId)}
          >
            Save
          </button>
        </section>
      </div>
    </React.Fragment>
  );
};

export default modal;

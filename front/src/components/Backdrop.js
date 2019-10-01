import React from "react";
import styles from "../styles/modal.module.scss";

const backdrop = props => (
  <div className={styles.backdrop} onClick={props.clicked}></div>
);

export default backdrop;

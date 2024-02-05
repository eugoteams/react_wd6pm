/** @format */

import React, { Fragment } from "react";
import style from "./Modal.module.css";

const Modal = (props) => {
  return (
    <Fragment>
      <div className={`${style.root_container}`}>
        <div
          className={`${style.overlay}`}
          onClick={props.onBackgroundClick}
        ></div>
        <div>{props.children}</div>
      </div>
    </Fragment>
  );
};

export default Modal;

/** @format */

import React, { Fragment } from "react";
import style from "./Toast.module.css";

const Toast = (props) => {
  return (
    <Fragment>
      <div className={`${style.container} ${`${style[`${props.message}`]}`}`}>
        {props.message}
      </div>
    </Fragment>
  );
};

export default Toast;

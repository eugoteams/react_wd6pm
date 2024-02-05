/** @format */

import React, { Fragment } from "react";
import style from "./Button.module.css";

const Button = (props) => {
  return (
    <Fragment>
      <button className={`${style.button}`} onClick={props.onClickListener}>
        {props.label}
      </button>
    </Fragment>
  );
};

export default Button;

/** @format */

import React, { Fragment } from "react";
import style from "./SimpleCard.module.css";
import Button from "../Button/Button";

const SimpleCard = (props) => {
  return (
    <Fragment>
      <div className={`${style.container}`}>
        <p>This is a Simple Card</p>
        <div className={`${style.button_container}`}>
          <Button label="close" onClickListener={props.onClickClose} />
        </div>
      </div>
    </Fragment>
  );
};

export default SimpleCard;

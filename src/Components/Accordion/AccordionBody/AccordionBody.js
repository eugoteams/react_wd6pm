/** @format */

import React, { Fragment } from "react";
import style from "./AccordionBody.module.css";

const AccordionBody = ({ description }) => {
  return (
    <Fragment>
      <div className={`${style.container}`}>{description}</div>
    </Fragment>
  );
};

export default AccordionBody;

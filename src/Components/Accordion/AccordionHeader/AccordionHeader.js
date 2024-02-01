/** @format */

import React, { Fragment, useState } from "react";
import style from "./AccordionHeader.module.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const AccordionHeader = ({ title, onClick }) => {
  const [onHeaderClick, setOnHeaderClick] = useState(false);
  const size = 18;
  const color = "#adb5bd";

  const onClickHeader = (e) => {
    setOnHeaderClick((prevState) => !prevState);
    onClick();
  };

  return (
    <Fragment>
      <div className={`${style.container}`} onClick={onClickHeader}>
        <p>{title}</p>
        {onHeaderClick ? (
          <ChevronUp size={size} color={color} absoluteStrokeWidth />
        ) : (
          <ChevronDown size={size} color={color} absoluteStrokeWidth />
        )}
      </div>
    </Fragment>
  );
};

export default AccordionHeader;

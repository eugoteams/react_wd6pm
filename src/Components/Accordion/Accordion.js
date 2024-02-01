/** @format */

import React, { Fragment, useState } from "react";
import style from "./Accordion.module.css";
import AccordionHeader from "./AccordionHeader/AccordionHeader";
import AccordionBody from "./AccordionBody/AccordionBody";

const Accordion = ({ title, description }) => {
  const [slideDown, setSlideDown] = useState(false);
  const onClickHeaderListener = () => {
    console.log("Header has been clicked");
    setSlideDown((prevState) => !prevState);
  };

  return (
    <Fragment>
      <div
        className={
          slideDown
            ? `${style.conatiner} ${style.height_slide}`
            : `${style.conatiner}`
        }
      >
        <AccordionHeader title={title} onClick={onClickHeaderListener} />
        {slideDown && <AccordionBody description={description} />}
      </div>
    </Fragment>
  );
};

export default Accordion;

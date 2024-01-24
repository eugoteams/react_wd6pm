/** @format */

import React, { Fragment, memo } from "react";
import style from "./Card.module.css";

const Card = ({ todo, onClick, clickedId }) => {
  console.log("clikced Id ::", clickedId, todo["id"]);
  return (
    <Fragment>
      <p
        key={todo["id"]}
        className={
          todo["id"] === clickedId
            ? `${style.container} ${style.clicked_style}`
            : `${style.container}`
        }
        onClick={() => {
          onClick(todo["id"]);
        }}
      >
        {todo.title}
      </p>
    </Fragment>
  );
};

export default memo(Card);

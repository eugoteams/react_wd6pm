/** @format */

import React from "react";
import style from "./InputField.module.css";

const InputField = (props) => {
  // console.log("InputField props ::", props);
  //console.log("InputField style ::", style); //WebPack
  const value = "dynamic name";
  //console.log("This is a string", value); //ES6
  //   console.log(`This is a string intrerpolation ${value}`);

  let object = {
    fname: "james",
    lname: "doe",
  };
  console.log("style", style.container);
  return (
    <>
      <div
        className={`${style.container} ${style.background} ${style.some_style}`}
      >
        <label className={`${style.label}`}>{props.label}</label>
        <input
          type="text"
          placeholder={props.placeholder}
          className={`${style.input}`}
        />
      </div>
    </>
  );
};

export default InputField;

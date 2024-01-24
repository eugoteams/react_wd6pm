/** @format */

import React, { Fragment, useCallback, useEffect, useState } from "react";
import style from "./UseEffect.module.css";
import Card from "../Card/Card";

const UseEffectTuts = (props) => {
  const URL = "https://jsonplaceholder.typicode.com/todos";
  const [todos, setTodos] = useState([]); //Array,Object,null ,undeifined ,...etc
  const [todoClicked, setTodoClicked] = useState(0);

  const fetchData = async () => {
    try {
      let response = await fetch(URL);
      let data = await response.json();
      setTodos((prevState) => [...data]);
    } catch (err) {
      console.log("Server error");
    }
  };

  useEffect(() => {
    console.log("Compoent Mounted");
    //Form the external source
    fetchData();
  }, []);

  const onClickListener = useCallback((value) => {
    setTodoClicked((prevState) => value);
    console.log("value clicked", value);
  }, []);

  return (
    <Fragment>
      {todos.map((todo, index) => {
        return (
          <Card
            todo={todo}
            key={todo["id"]}
            onClick={onClickListener}
            clickedId={todoClicked}
          />
        );
      })}
    </Fragment>
  );
};

export default UseEffectTuts;

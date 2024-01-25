/** @format */

import React, { Fragment, useEffect, useState } from "react";
import style from "./Select.module.css";
import { Check, ChevronsUpDown, icons } from "lucide-react";

const Select = ({ data, onSelecedItem }) => {
  const [dorpDown, setDropDown] = useState(false);
  const [itemSelected, setItemSelected] = useState("");

  const onClickListener = () => {
    setDropDown((prevState) => !prevState);
  };

  const onClickItem = (event) => {
    console.log(event.target.getAttribute("name"));
    setItemSelected((prevState) => event.target.getAttribute("name"));
    onClickListener();
  };

  useEffect(() => {
    onSelecedItem(itemSelected);
  }, [itemSelected]);

  return (
    <Fragment>
      <div className={`${style.container}`}>
        <div className={`${style.input_holder}`}>
          <p className={`${style.selected_text}`}>{itemSelected}</p>
          <ChevronsUpDown
            size={18}
            color="#868e96"
            absoluteStrokeWidth
            onClick={onClickListener}
            className={`${style.icon}`}
          />
        </div>
        {dorpDown && (
          <div className={`${style.drop_down}`}>
            {data.map((item, index) => {
              return (
                <div
                  key={`drop_down_${index}`}
                  className={
                    itemSelected === item
                      ? `${style.item_active} ${style.item_container}`
                      : `${style.item_container}`
                  }
                >
                  {itemSelected === item ? (
                    <Check size={18} absoluteStrokeWidth color="#3b5bdb" />
                  ) : (
                    ""
                  )}

                  <p name={item} onClick={onClickItem}>
                    {item}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Select;

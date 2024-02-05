/** @format */

import { Fragment, useEffect, useState } from "react";
import Select from "./Components/Select/Select";
import style from "./App.module.css";
import Accordion from "./Components/Accordion/Accordion";
import { AccordionData } from "./model/data";
import Modal from "./Components/Modal/Modal";
import SimpleCard from "./Components/SimpleCard/SimpleCard";
import Button from "./Components/Button/Button";
import Toast from "./Components/Toast/Toast";

function App() {
  const [popup, setPopUp] = useState(true);
  const [serverMsg, setServerMsg] = useState("sucess");
  const data = ["Python", "Node JS", "C", "C++"];
  const fruits = [
    "mango",
    "apple",
    "banna",
    "grapes",
    "papaya",
    "strawberry",
    "random fruit",
  ];

  // useEffect(() => {
  //   console.log("Enterd here --> Component loaded");
  //   setPopUp((prevState) => !prevState);
  //   setTimeout(() => {
  //     console.log("Enterd here --> timer executed");
  //     setServerMsg((prevState) => "fail");
  //   }, 1000);
  // }, []);

  const onProgrammingLangaugeSelected = (itemSelected) => {
    console.log("The Programming Language selecred ::", itemSelected);
  };
  const onFruitSelected = (itemSelected) => {
    console.log("The Fruit Selected ::", itemSelected);
  };

  const onClickPopUpListener = () => {
    console.log("Capturing the click");
    setPopUp((prevState) => !prevState);
  };

  const onBackgroundClickListener = () => {
    onClickPopUpListener();
  };
  const onClickCloseListener = () => {
    onClickPopUpListener();
  };

  return (
    <Fragment>
      <Button label={"show popup"} onClickListener={onClickPopUpListener} />
      {popup && (
        <Modal onBackgroundClick={onBackgroundClickListener}>
          <SimpleCard onClickClose={onClickCloseListener} />
          {/* <Toast message={serverMsg} /> */}
        </Modal>
      )}

      <div className={`${style.container}`}>
        {AccordionData.map((accordion, _) => {
          return (
            <Accordion
              key={accordion.id}
              title={accordion.title}
              description={accordion.description}
            />
          );
        })}
      </div>

      {/* <UseEffectTuts /> */}
      {/* <div className={`${style.container}`}>
        <Select data={data} onSelecedItem={onProgrammingLangaugeSelected} />
        <Select data={fruits} onSelecedItem={onFruitSelected} />
      </div> */}
    </Fragment>
  );
}

export default App;

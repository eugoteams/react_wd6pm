/** @format */

import { Fragment } from "react";
import Select from "./Components/Select/Select";
import style from "./App.module.css";
import Accordion from "./Components/Accordion/Accordion";
import { AccordionData } from "./model/data";

function App() {
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

  const onProgrammingLangaugeSelected = (itemSelected) => {
    console.log("The Programming Language selecred ::", itemSelected);
  };
  const onFruitSelected = (itemSelected) => {
    console.log("The Fruit Selected ::", itemSelected);
  };

  return (
    <Fragment>
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

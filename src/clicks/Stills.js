import React from "react";
import ClicksButton from "./ClicksButton";
import { stills } from "./clickObjects";

const Stills = ({ setTypeClick, setIsWide, isWide }) => {
  return stills.map((still) => (
    <ClicksButton
      text={still.text}
      typeClick={still.typeClick}
      key={still.text}
      setTypeClick={setTypeClick}
      isWide={isWide}
      setIsWide={setIsWide}
    />
  ));
};

export default Stills;

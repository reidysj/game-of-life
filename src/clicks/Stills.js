import React from "react";
import ClicksButton from "./ClicksButton";
import { stills } from "./clickObjects";

const Stills = ({ setTypeClick }) => {
  return stills.map((still) => (
    <ClicksButton
      text={still.text}
      typeClick={still.typeClick}
      key={still.text}
      setTypeClick={setTypeClick}
    />
  ));
};

export default Stills;

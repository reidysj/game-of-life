import React from "react";
import ClicksButton from "./ClicksButton";
import { oscills } from "./clickObjects";

const Oscill = ({ setTypeClick }) => {
  return oscills.map((oscill) => (
    <ClicksButton
      typeClick={oscill.typeClick}
      text={oscill.text}
      key={oscill.typeClick}
      setTypeClick={setTypeClick}
    />
  ));
};

export default Oscill;

import React from "react";
import ClicksButton from "./ClicksButton";
import { ships } from "./clickObjects";

const Ships = ({ setTypeClick, isWide, setIsWide }) => {
  return ships.map((ship) => (
    <ClicksButton
      text={ship.text}
      typeClick={ship.typeClick}
      key={ship.typeClick}
      setTypeClick={setTypeClick}
      isWide={isWide}
      setIsWide={setIsWide}
    />
  ));
};

export default Ships;

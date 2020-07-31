import React, { useState } from "react";
import { connect } from "react-redux";
import { setTypeClick } from "../redux/actions";
import {
  Button,
  Flex,
} from "@chakra-ui/core";
import Oscill from "./Oscill";
import Ships from "./Ships";
import Stills from "./Stills";
import TypeMenu from "./TypeMenu";

const Clicks = ({ setTypeClick }) => {
  const [stampType, setStampType] = useState("");

  return (
    <Flex
      width={["100%", "100%", "100%", "20%"]}
      direction={["row", "row", "row", "column"]}
      justify="space-evenly"
      align="center"
      display={["none", "none", "flex", "flex", "flex"]}
    >
        <TypeMenu stampType={stampType} setStampType={setStampType} />
      <Button
        variant="solid"
        variantColor="teal"
        width="50%"
        onClick={(e) => setTypeClick("cell")}
      >
        Single Cell
      </Button>

      {stampType === "osc" ? (
        <Oscill setTypeClick={setTypeClick}/>
      ) : stampType === "ship" ? (
        <Ships setTypeClick={setTypeClick}/>
      ) : (
        <>
          <Stills setTypeClick={setTypeClick}/>
        </>
      )}
    </Flex>
  );
};
export default connect(null, { setTypeClick })(Clicks);

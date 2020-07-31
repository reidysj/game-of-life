import React, { useState } from "react";
import { connect } from "react-redux";
import { setTypeClick } from "../redux/actions";
import { Button, Flex } from "@chakra-ui/core";
import Oscill from "./Oscill";
import Ships from "./Ships";
import Stills from "./Stills";
import TypeMenu from "./TypeMenu";

const Clicks = ({ setTypeClick, typeClick }) => {
  const [stampType, setStampType] = useState("");
  const [isWide, setIsWide] = useState(false)

  return (
    <Flex
      width={["100%", "100%", "100%", "20%"]}
      direction={["row", "row", "row", "column"]}
      justify="space-evenly"
      align="center"
      display='flex'
    >
      <TypeMenu stampType={stampType} setStampType={setStampType} isWide={isWide} setIsWide={setIsWide}/>
      <Button
        display={['none', 'none', 'auto', 'auto']}
        variant={typeClick === 'cell' ? 'solid' : 'outline'}
        variantColor="teal"
        width="50%"
        onClick={(e) => setTypeClick("cell")}
      >
        Single Cell
      </Button>

      {stampType === "osc" ? (
        <Oscill setTypeClick={setTypeClick} isWide={isWide} setIsWide={setIsWide}/>
      ) : stampType === "ship" ? (
        <Ships setTypeClick={setTypeClick} isWide={isWide} setIsWide={setIsWide}/>
      ) : (
        <>
          <Stills setTypeClick={setTypeClick} isWide={isWide} setIsWide={setIsWide}/>
        </>
      )}
    </Flex>
  );
};

const mStP = state => {
  return{
    typeClick: state.typeClick
  }
}

export default connect(mStP, { setTypeClick })(Clicks);

import React from "react";
import { Button, Flex } from "@chakra-ui/core";
import TopForm from "./TopForm";
import BottomForm from "./BottomForm";
import Selection from "./Selection";
import {
  setColor,
  setViewingArray,
  setCount,
  setIsRunning,
  setNewInterval,
} from "../redux/actions";
import { connect } from "react-redux";

const Form = ({
  isRunning,
  gridSize,
  setIsRunning,
  setViewingArray,
  setCount,
}) => {


  const initialCell = {
    isAlive: false,
  };



  const handleClear = () => {
    setCount(0);
    setViewingArray(Array(gridSize * gridSize).fill(initialCell));
    if (isRunning) {
      setIsRunning(false);
    }
  };

  return (
    <Flex
      direction="column"
      justify="space-around"
      backgroundColor="white"
      padding="2.5vw"
      border="1px solid black"
      width={["95vw", "95vw", "95vw", "auto"]}
      margin={["20px auto", "20px auto", "20px auto", "inherit"]}
    >
      <TopForm
        setCount={setCount}
        gridSize={gridSize}
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        setViewingArray={setViewingArray}
      />
      <Button variantColor="blue" variant="outline" onClick={handleClear}>
        Clear Grid
      </Button>
      <hr />
      <Selection setIsRunning={setIsRunning}setCount={setCount} setViewingArray={setViewingArray} isRunning={isRunning}/>
      <BottomForm/>
    </Flex>
  );
};

const mStP = (state) => {
  return {
    isRunning: state.isRunning,
    gridSize: state.gridSize,
    interval: state.interval,
    color: state.color,
  };
};

export default connect(mStP, {
  setNewInterval,
  setCount,
  setColor,
  setViewingArray,
  setIsRunning,
})(Form);

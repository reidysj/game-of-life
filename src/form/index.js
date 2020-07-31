import React, { useState } from "react";
import { Button, Flex } from "@chakra-ui/core";
import TopForm from "./TopForm";
import BottomForm from "./BottomForm";
import Selection from "./Selection";
import {
  setGridSize,
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
  setGridSize,
  setColor,
  interval,
  color,
  setNewInterval,
  setCount,
}) => {
  const [steps, setSteps] = useState(1);

  const initialCell = {
    isAlive: false,
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "color":
        setColor(e.target.value);
        break;
      case "gridSize":
        setGridSize(Number(e.target.value));
        setCount(0);
        if (gridSize !== e.target.value) {
          setViewingArray(
            Array(e.target.value * e.target.value).fill(initialCell)
          );
        }
        setIsRunning(false)
        break;
      case "interval":
        setNewInterval(e.target.value);
        break;
      case "steps":
        setSteps(e.target.value);
        break;
      default:
        break;
    }
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
        handleChange={handleChange}
        steps={steps}
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
      <Selection handleChange={handleChange} />
      <BottomForm
        handleChange={handleChange}
        interval={interval}
        color={color}
      />
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
  setGridSize,
  setNewInterval,
  setCount,
  setColor,
  setViewingArray,
  setIsRunning,
})(Form);

import React, { useState } from "react";
import { setCells } from "./utils/setCells";
import { useInterval } from "./utils/useInterval";
import Grid from "./grid";
import Information from "./information";
import image from "./utils/life.svg";
import Form from "./form";
import {
  ThemeProvider,
  CSSReset,
  Flex,
  Text,
  Heading,
  Image,
} from "@chakra-ui/core";

function App() {
  const initialCell = {
    isAlive: false,
  };
  const [color, setColor] = useState("#000000");
  const [gridSize, setGridSize] = useState(25);
  const [interval, setInterval] = useState(700);
  const [viewingArray, setViewingArray] = useState(
    Array(gridSize * gridSize).fill(initialCell)
  );
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);

  const handleSubmit = (e, inputs) => {
    e.preventDefault();
    setGridSize(inputs.gridSize);
    setInterval(inputs.interval);
    setColor(inputs.color);
    if (gridSize !== inputs.gridSize) {
      setViewingArray(
        Array(inputs.gridSize * inputs.gridSize).fill(initialCell)
      );
    }
  };

  const handleClick = (cell, cellIndex) => {
    if (!isRunning) {
      setViewingArray(
        viewingArray.map((item, index) =>
          index === cellIndex ? { ...item, isAlive: !item.isAlive } : item
        )
      );
    }
  };

  const handleClear = () => {
    setCount(0);
    setViewingArray(Array(gridSize * gridSize).fill(initialCell));
    if (isRunning) {
      setIsRunning(false);
    }
  };

  const handleRunSimulation = (e) => {
    setIsRunning(!isRunning);
  };

  useInterval(() => {
    if (isRunning) {
      setCount(count + 1);
      setViewingArray((viewingArray) => setCells(viewingArray, gridSize));
    }
  }, interval);

  const handleRandom = () => {
    const random = [];
    for (let i = 0; i < gridSize * gridSize; i++) {
      const value = Math.round(Math.random());
      if (value === 0) {
        random.push({ isAlive: false });
      } else {
        random.push({ isAlive: true });
      }
    }
    setViewingArray(random);
  };

  return (
    <ThemeProvider>
      <CSSReset />
      <Image
        src={image}
        height="100vh"
        width="100vw"
        zIndex="-1000"
        position="absolute"
        opacity=".05"
        overflow="hidden"
      />
      <Heading textAlign="center">Conway's Game of Life</Heading>
      <Text textAlign="center">Generation Count: {count}</Text>
      <Flex direction={['column-reverse', 'column-reverse', 'column-reverse', "row-reverse"]} justify="space-evenly">
        <Form
          isRunning={isRunning}
          handleSubmit={handleSubmit}
          handleRandom={handleRandom}
          handleClear={handleClear}
          handleRunSimulation={handleRunSimulation}
        />
        <Grid
          gridSize={gridSize}
          viewingArray={viewingArray}
          handleClick={handleClick}
          color={color}
        />
      </Flex>
      <Information />
    </ThemeProvider>
  );
}

export default App;

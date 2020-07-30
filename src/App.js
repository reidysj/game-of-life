import React, { useState } from "react";
import { setCells } from "./utils/setCells";
import { useInterval } from "./utils/useInterval";
import Grid from "./grid";
import Information from "./information";
import image from "./utils/life.svg";
import Form from "./form";
import Click from './clicks'
import {
  ThemeProvider,
  CSSReset,
  Flex,
  Text,
  Heading,
  Image,
} from "@chakra-ui/core";
import {makeSquare, makeHwss, makeLwss, makeMwss, makeSpinner, makeToad, makeBeacon, makeGlider, makeTub, makeBoat, makeLoaf, makeHive, makeDeca, makePulsar} from './utils/specialClicks'

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
  const [typeClick, setTypeClick] = useState('cell')

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
    if(!isRunning){
      switch(typeClick){
        case 'square':
          setViewingArray(makeSquare(cellIndex, gridSize, viewingArray))
          break;
        case 'line':
          setViewingArray(makeSpinner(cellIndex, gridSize, viewingArray))
          break;
        case 'toad':
          setViewingArray(makeToad(cellIndex, gridSize, viewingArray))
          break;
        case 'beacon':
          setViewingArray(makeBeacon(cellIndex, gridSize, viewingArray))
          break;
        case 'glider':
          setViewingArray(makeGlider(cellIndex, gridSize, viewingArray))
          break;
        case 'tub':
          setViewingArray(makeTub(cellIndex, gridSize, viewingArray))
          break;
        case 'hive':
          setViewingArray(makeHive(cellIndex, gridSize, viewingArray))
          break;
        case 'loaf':
          setViewingArray(makeLoaf(cellIndex, gridSize, viewingArray))
          break;
        case 'boat':
          setViewingArray(makeBoat(cellIndex, gridSize, viewingArray))
          break;
        case 'deca':
          setViewingArray(makeDeca(cellIndex, gridSize, viewingArray))
          break;
        case 'lwss':
          setViewingArray(makeLwss(cellIndex, gridSize, viewingArray))
          break;
        case 'mwss':
          setViewingArray(makeMwss(cellIndex, gridSize, viewingArray))
          break;
        case 'hwss':
          setViewingArray(makeHwss(cellIndex, gridSize, viewingArray))
          break;
        case 'pulsar':
          setViewingArray(makePulsar(cellIndex, gridSize, viewingArray))
          break;
        default:
          setViewingArray(
            viewingArray.map((item, index) =>
              index === cellIndex ? { ...item, isAlive: !item.isAlive } : item
            )
          )


      }
    }
  }

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

  const handleSteps = (e, num=1) => {
    let hiddenArray = JSON.parse(JSON.stringify(viewingArray))
    for(let i = 1; i<=num; i++){
      hiddenArray = setCells(hiddenArray, gridSize)
    }
    setCount(count+num)
    setViewingArray([...hiddenArray])
  }

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
        height="98vh"
        width="100vw"
        zIndex="-1000"
        position="absolute"
        opacity=".05"
        overflow="hidden"
      />
      <Heading textAlign="center" marginTop='1.2rem'>Conway's Game of Life</Heading>
      <Text textAlign="center">Generation Count: {count}</Text>
      <Flex direction={['column-reverse', 'column-reverse', 'column-reverse', "row-reverse"]} justify="space-evenly">
        <Form
          isRunning={isRunning}
          handleSubmit={handleSubmit}
          handleRandom={handleRandom}
          handleClear={handleClear}
          handleRunSimulation={handleRunSimulation}
          handleSteps={handleSteps}
        />
        <Grid
          gridSize={gridSize}
          viewingArray={viewingArray}
          handleClick={handleClick}
          color={color}
        />
        <Click setTypeClick={setTypeClick} />
      </Flex>
      <Information />
    </ThemeProvider>
  );
}

export default App;

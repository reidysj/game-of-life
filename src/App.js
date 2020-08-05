import React from "react";
import { setCells } from "./utils/setCells";
import { useInterval } from "./utils/useInterval";
import Grid from "./grid";
import Information from "./information";
import image from "./utils/life.svg";
import Form from "./form";
import Click from "./clicks";
import {
  ThemeProvider,
  CSSReset,
  Flex,
  Text,
  Heading,
  Image,
} from "@chakra-ui/core";
import { connect } from "react-redux";
import { setCount, setViewingArray } from "./redux/actions";

function App({
  count,
  gridSize,
  viewingArray,
  interval,
  setViewingArray,
  setCount,
  isRunning,
}) {
  useInterval(() => {
    if (isRunning) {
      setCount(count + 1);
      setViewingArray(setCells(viewingArray, gridSize));
    }
  }, interval);

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
      <Heading textAlign="center" marginTop='15px' marginBottom='15px'>
        Conway's Game of Life
      </Heading>
      <Text textAlign="center">Generation Count: {count}</Text>
      <Flex
        direction={[
          "column-reverse",
          "column-reverse",
          "column-reverse",
          "row-reverse",
        ]}
        justify="space-evenly"
      >
        <Form />
        <Grid />
        <Click />
      </Flex>
      <Information />
    </ThemeProvider>
  );
}

const mStP = (state) => {
  return {
    count: state.count,
    gridSize: state.gridSize,
    interval: state.interval,
    isRunning: state.isRunning,
    viewingArray: state.viewingArray,
  };
};

export default connect(mStP, { setViewingArray, setCount })(App);

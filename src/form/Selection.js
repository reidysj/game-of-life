import React from "react";
import { Select, Text } from "@chakra-ui/core";
import { handleGrid } from "./formHelpers";
import { connect } from "react-redux";
import { setGridSize } from "../redux/actions";

const Selection = ({
  isRunning,
  setGridSize,
  setCount,
  setViewingArray,
  setIsRunning,
}) => {
  const handleChange = (e, setGridSize, setCount, setViewingArray) => {
    handleGrid(e, setGridSize, setCount, setViewingArray);
    setIsRunning(!isRunning);
  };

  return (
    <>
      <Text textAlign='center'>Grid Size</Text>
      <Select
        name="gridSize"
        onChange={(e) =>
          handleChange(e, setGridSize, setCount, setViewingArray)
        }
        textAlign="center"
      >
        <option value="25">25x25</option>
        <option value="35">35x35</option>
        <option value="40">40x40</option>
        <option value="50">50x50</option>
        <option value="60">60x60</option>
        <option value="65">65x65</option>
        <option value="70">
          70x70‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎
          ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎
          ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‎‎‎‎‎⚠
        </option>
        <option value="60">
          75x75‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎
          ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎
          ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎‏‏‎ ‎ ‎⚠
        </option>
        <option value="65">
          80x80‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎
          ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎
          ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎‏‏‎ ‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎‏‏‎ ‎ ‎⚠
        </option>
        <option value="70">
          90x90‏‏‎ ‎‏‏‎ ‏‏‎ ‎‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎
          ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎
          ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‏‏‎ ‎‏‏‎ ‎⚠
        </option>
        <option value="100">
          100x100‏‏‎ ‎‏‏‎ ‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎
          ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎
          ‎‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏ ‎ ‎‎⚠
        </option>
      </Select>
    </>
  );
};

export default connect(null, { setGridSize })(Selection);

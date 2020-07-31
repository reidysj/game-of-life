import React from "react";
import { Grid as CUGrid } from "@chakra-ui/core";
import { Cell } from "./styles";
import { setViewingArray } from "../redux/actions";
import { connect } from "react-redux";
import { handleClick } from "./clickHelper";

const Grid = ({ viewingArray, gridSize, setViewingArray, color }) => {
  return (
    <>
      <CUGrid
        margin={["0 auto", "0 auto", "0 auto", "inherit"]}
        templateColumns={`repeat(${gridSize}, 1fr)`}
        templateRows={`repeat(${gridSize}, 1fr)`}
        width={["95vw", "95vw", "95vw", "700px"]}
        height={["95vw", "95vw", "95vw", "700px"]}
      >
        {viewingArray.map((cell, index) => {
          return (
            <Cell
              key={index}
              onClick={() => handleClick(cell, index, setViewingArray)}
              isAlive={cell.isAlive}
              color={color}
            />
          );
        })}
      </CUGrid>
    </>
  );
};

const mStP = (state) => {
  return {
    viewingArray: state.viewingArray,
    gridSize: state.gridSize,
    color: state.color,
  };
};

export default connect(mStP, { setViewingArray })(Grid);

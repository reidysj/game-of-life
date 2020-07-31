import styled from "styled-components";

export const GridBody = styled.div`
  width: 700px;
  height: 700px;
  display: grid;
  grid-template-columns: repeat(${(props) => props.gridSize}, 1fr);
  grid-template-rows: repeat(${(props) => props.gridSize}, 1fr);
`;
export const Cell = styled.div`
  border: 1px solid black;
  background-color: ${(props) => (props.isAlive ? props.color : "white")};
`;

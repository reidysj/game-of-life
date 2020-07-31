import store from "../redux/store";

export const initialCell = {
  isAlive: false,
};

export const handleGrid = (e, setGridSize, setCount, setViewingArray) => {
  const state = store.getState();
  const gridSize = state.gridSize;

  setGridSize(Number(e.target.value));
  setCount(0);
  if (gridSize !== e.target.value) {
    const newGrid = Number(e.target.value);
    console.log(newGrid);
    setViewingArray(Array(newGrid * newGrid).fill(initialCell));
  }
};

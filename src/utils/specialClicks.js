export const makeSquare = (location, gridSize, array) => {
  const filtered = array.map((item, index) =>
    index === location ||
    index === location + 1 ||
    index === location + gridSize ||
    index === location + gridSize + 1
      ? { ...item, isAlive: !item.isAlive }
      : item
  );
  return filtered;
};

export const makeSpinner = (location, gridSize, array) => {
  const filtered = array.map((item, index) =>
    index === location ||
    index === location + gridSize ||
    index === location - gridSize
      ? { ...item, isAlive: true }
      : item
  );
  return filtered;
};

export const makeToad = (location, gridSize, array) => {
  const filtered = array.map((item, index) =>
    index === location ||
    index === location + gridSize ||
    index === location + gridSize - 1 ||
    index === location + 1 ||
    index === location + 2 ||
    index === location + gridSize + 1
      ? { ...item, isAlive: true }
      : item
  );
  return filtered;
};

export const makeBeacon = (location, gridSize, array) => {
    const filtered = array.map((item, index) => (
        index === location ||
        index === location - 1 ||
        index === location + gridSize ||
        index === location + gridSize - 1 ||
        index === location + (gridSize * 2) + 1 ||
        index === location + (gridSize * 2) + 2 ||
        index === location + (gridSize * 3) + 1 ||
        index === location + (gridSize * 3) + 2 
        ? { ...item, isAlive: true }
        : item
    ))
    return filtered
}

export const makeGlider = (location, gridSize, array) => {
    const filtered = array.map((item, index) => (
        index === location + gridSize ||
        index === location - gridSize || 
        index === location + 1 ||
        index === location + gridSize - 1 ||
        index === location + gridSize + 1 ?
        {...item, isAlive: true}
        : item
    ))
    return filtered
}

export const makeHive = (location, gridSize, array) => {
    // i-1, i+2, i+n, i+n+1, i-n, i-n+1
    const filtered = array.map((item, index) => (
        index === location - 1 ||
        index === location + 2 ||
        index === location + gridSize ||
        index === location + gridSize + 1 ||
        index === location - gridSize ||
        index === location - gridSize + 1 ?
        {...item, isAlive: true} :
        item
    ))
    return filtered
}

export const makeLoaf = (location, gridSize, array) => {
    // i+1, i-2, i-n, i-n-1, i+n+1, i+n-1, i+2n
    const filtered = array.map((item, index) => (
        index === location + 1 ||
        index === location - 2 ||
        index === location - gridSize ||
        index === location - gridSize - 1 ||
        index === location + gridSize + 1 ||
        index === location + gridSize - 1 ||
        index === location + (2*gridSize) ?
        {...item, isAlive: true} :
        item
    ))
    return filtered
}

export const makeBoat = (location, gridSize, array) => {
    //i-n, i-n-1, i-1, i+1, i+n
    const filtered = array.map((item, index) => (
        index === location - gridSize ||
        index === location - gridSize - 1 ||
        index === location - 1 ||
        index === location + 1 ||
        index === location + gridSize ?
        {...item, isAlive: true} :
        item
    ))
    return filtered
}

export const makeTub = (location, gridSize, array) => {
    // i+1, i-1, i-n, i+n
    const filtered = array.map((item, index) => (
        index === location + 1 ||
        index === location - 1 ||
        index === location + gridSize ||
        index === location - gridSize ?
        {item, isAlive: true} :
        item
    ))
    return filtered
}

export const makeDeca = (l, n, arr) => {
    //i-4, i-3, i-1, i, i+1, i+2, i+4, i+5, i-n-2, i-n+3, i+n-2, i+n+3
    const filtered = arr.map((item, index) => (
        index === l - 4 ||
        index === l - 3 ||
        index === l - 1 ||
        index === l ||
        index === l + 1 ||
        index === l + 2 ||
        index === l + 4 ||
        index === l + 5 ||
        index === l - n - 2 ||
        index === l - n + 3 ||
        index === l + n - 2 ||
        index === l + n + 3 ?
        {item, isAlive: true}:
        item
    ))
    return filtered
}

export const makeLwss = (l, n, arr) => {
    //i, i+1, i+2, i+3, i-n, i-n+4, i-2n, i-3n+1, i-3n+4
    const filtered = arr.map((item, index) => (
        index === l ||
        index === l + 1 ||
        index === l + 2 ||
        index === l + 3 ||
        index === l - n ||
        index === l - n + 4 ||
        index === l - (2*n) ||
        index === l - (3*n) + 1 ||
        index === l - (3*n) + 4 ?
        {item, isAlive: true}:
        item
    ))
    return filtered
}

export const makeMwss = (l, n, arr) => {
    //i, i+1, i+2, i+3, i-n, i-n+4, i-2n, i-3n+1, i-3n+4
    const filtered = arr.map((item, index) => (
        index === l ||
        index === l + 1 ||
        index === l + 2 ||
        index === l + 3 ||
        index === l + 4 ||
        index === l - n ||
        index === l - n + 5 ||
        index === l - (2*n) ||
        index === l - (3*n) + 1 ||
        index === l - (3*n) + 5 ||
        index === l - (4*n) + 3 ?
        {item, isAlive: true}:
        item
    ))
    return filtered
}

export const makeHwss = (l, n, arr) => {
    //i, i+1, i+2, i+3, i-n, i-n+4, i-2n, i-3n+1, i-3n+4
    const filtered = arr.map((item, index) => (
        index === l ||
        index === l + 1 ||
        index === l + 2 ||
        index === l + 3 ||
        index === l + 4 ||
        index === l + 5 ||
        index === l - n ||
        index === l - n + 6 ||
        index === l - (2*n) ||
        index === l - (3*n) + 1 ||
        index === l - (3*n) + 6 ||
        index === l - (4*n) + 3 ||
        index === l - (4*n) + 4 ?
        {item, isAlive: true}:
        item
    ))
    return filtered
}
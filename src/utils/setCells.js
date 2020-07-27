// These are helper functions to replace some simple math logic
import { one, two, three, four, five, six, seven, eight } from "./mathHelpers";

// TODO: Possibly make it a straight up array with no actual properties? just bools
function centerNeighbors(j, n, currentArr) {
  let livingNeighbors = 0;
  if (one(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (two(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (three(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (four(j, currentArr)) {
    livingNeighbors++;
  }
  if (five(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (six(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (seven(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (eight(j, currentArr)) {
    livingNeighbors++;
  }
  return livingNeighbors;
}
//index 0
function topLeftNeighbors(n, currentArr) {
  let livingNeighbors = 0;
  if (currentArr[1].isAlive) {
    livingNeighbors++;
  }
  if (currentArr[n].isAlive) {
    livingNeighbors++;
  }
  if (currentArr[n + 1].isAlive) {
    livingNeighbors++;
  }
  return livingNeighbors;
}
// index n-1
function topRightNeigbors(j, n, currentArr) {
  let livingNeighbors = 0;
  if (six(j, j, currentArr)) {
    livingNeighbors++;
  }
  if (six(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (eight(j, currentArr)) {
    livingNeighbors++;
  }
  return livingNeighbors;
}
//index (n^2)-n
function bottomLeftNeighbors(j, n, currentArr) {
  let livingNeighbors = 0;
  if (two(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (three(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (four(j, currentArr)) {
    livingNeighbors++;
  }
  return livingNeighbors;
}
//index (n^2)-1
function bottomRightNeighbors(j, n, currentArr, gridSquared) {
  let livingNeighbors = 0;
  if (currentArr[gridSquared - 2].isAlive) {
    livingNeighbors++;
  }
  if (currentArr[gridSquared - n - 2].isAlive) {
    livingNeighbors++;
  }
  if (currentArr[gridSquared - n - 1].isAlive) {
    livingNeighbors++;
  }
  return livingNeighbors;
}
//top edge
function topEdgeNeighbors(j, n, currentArr) {
  let livingNeighbors = 0;
  if (four(j, currentArr)) {
    livingNeighbors++;
  }
  if (five(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (six(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (seven(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (eight(j, currentArr)) {
    livingNeighbors++;
  }
  return livingNeighbors;
}
//left edge
function leftEdgeNeighbors(j, n, currentArr) {
  let livingNeighbors = 0;
  if (two(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (four(j, currentArr)) {
    livingNeighbors++;
  }
  if (five(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (six(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (seven(j, n, currentArr)) {
    livingNeighbors++;
  }
  return livingNeighbors;
}
//right edge
function rightEdgeNeighbors(j, n, currentArr) {
  let livingNeighbors = 0;
  if (one(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (two(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (six(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (seven(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (eight(j, currentArr)) {
    livingNeighbors++;
  }
  return livingNeighbors;
}
// bottom edge
function bottomEdgeNeighbors(j, n, currentArr) {
  let livingNeighbors = 0;
  if (one(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (two(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (three(j, n, currentArr)) {
    livingNeighbors++;
  }
  if (four(j, currentArr)) {
    livingNeighbors++;
  }
  if (eight(j, currentArr)) {
    livingNeighbors++;
  }
  return livingNeighbors;
}

function cellLogic(workingArr, index, livingNeighbors) {
  if (workingArr[index].isAlive) {
    if (livingNeighbors !== 2 || livingNeighbors !== 3) {
      workingArr[index].isAlive = false;
    }
  } else {
    if (livingNeighbors === 3) {
      workingArr[index].isAlive = true;
    }
  }
}

export function setCells(workingArr, currentArr, gridSize) {
  let index = 0;
  const gridSquared = gridSize ** 2;
  while (index < workingArr.length) {
    //index 0
    if (index === 0) {
      const livingNeighbors = topLeftNeighbors(gridSize, currentArr);
      cellLogic(workingArr, index, livingNeighbors);
    }
    //index n-1
    else if (index === gridSize - 1) {
      const livingNeighbors = topRightNeigbors(index, gridSize, currentArr);
      cellLogic(workingArr, index, livingNeighbors);
    }
    //index (n^2)-n
    else if (index === gridSquared - gridSize) {
      const livingNeighbors = bottomLeftNeighbors(index, gridSize, currentArr);
      cellLogic(workingArr, index, livingNeighbors);
    }
    //index (n^2)-1
    else if (index === gridSquared - 1) {
      const livingNeighhors = bottomRightNeighbors(
        index,
        gridSize,
        currentArr,
        gridSquared
      );
      cellLogic(workingArr, index, livingNeighhors);
    }
    //top edge
    else if (index > 0 && index < gridSize) {
      const livingNeighbors = topEdgeNeighbors(index, gridSize, currentArr);
      cellLogic(workingArr, index, livingNeighbors);
    }
    //left edge
    else if (index % gridSize === 0) {
      const livingNeighbors = leftEdgeNeighbors(index, gridSize, currentArr);
      cellLogic(workingArr, index, livingNeighbors);
    }
    //righjt edge
    else if ((index + 1) % gridSize === 0) {
      const livingNeighbors = rightEdgeNeighbors(index, gridSize, currentArr);
      cellLogic(workingArr, index, livingNeighbors);
    }
    //bottom edge
    else if (index >= gridSquared - gridSize + 1 || index <= gridSquared - 2) {
      const livingNeighbors = bottomEdgeNeighbors(index, gridSize, currentArr);
      cellLogic(workingArr, index, livingNeighbors);
    } 
    //middle pieces
    else {
      const livingNeighbors = centerNeighbors(index, gridSize, currentArr);
      cellLogic(workingArr, index, livingNeighbors);
    }
    index++;
  }
}

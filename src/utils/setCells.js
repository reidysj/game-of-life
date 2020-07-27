function centerNeighbors(j, n, currentArr){
    let livingNeighbors = 0
    if(currentArr[j-n].isAlive){
        livingNeighbors++
    }
    if(currentArr[j-n-1].isAlive){
        livingNeighbors++
    }
    if(currentArr[j-n+1].isAlive){
        livingNeighbors++
    }
    if(currentArr[j-1].isAlive){
        livingNeighbors++
    }
    if(currentArr[j+1].isAlive){
        livingNeighbors++
    }
    if(currentArr[j+n-1].isAlive){
        livingNeighbors++
    }
    if(currentArr[j+n].isAlive){
        livingNeighbors++
    }
    if(currentArr[j+n+1].isAlive){
        livingNeighbors++
    }
    return livingNeighbors
}
//index 0
function topLeftNeighbors(n, currentArr){
    let livingNeighbors = 0
    if(currentArr[1].isAlive){
        livingNeighbors++
    }
    if(currentArr[n].isAlive){
        livingNeighbors++
    }
    if(currentArr[n+1].isAlive){
        livingNeighbors++
    }
    return livingNeighbors
}
// index n-1
function topRightNeigbors(j, n, currentArr){
    let livingNeighbors = 0
    if(currentArr[j-1].isAlive){
        livingNeighbors++
    }
    if(currentArr[j+j].isAlive){
        livingNeighbors++
    }
    if(currentArr[j+n].isAlive){
        livingNeighbors++
    }
    return livingNeighbors
}
//index (n^2)-n
function bottomLeftNeighbors(j, n, currentArr){
    let livingNeighbors = 0
    if(currentArr[j-n].isAlive){
        livingNeighbors++
    }
    if(currentArr[j-n+1].isAlive){
        livingNeighbors++
    }
    if(currentArr[j+1].isAlive){
        livingNeighbors++
    }
    return livingNeighbors
}
//index (n^2)-1
function bottomRightNeighbors(j, n, currentArr, gridSquared){
    let livingNeighbors = 0
    if(currentArr[])
}

function cellLogic(workingArr, index, livingNeighbors){
    if(workingArr[index].isAlive){
        if(livingNeighbors !== 2 || livingNeighbors !== 3){
            workingArr[index].isAlive = false
        }
    }else{
        if(livingNeighbors === 3){
            workingArr[index].isAlive = true
        }
    }
    
}

function setCells(workingArr, currentArr, gridSize){
    let index = 0
    const gridSquared = gridSize ** 2
    while (index < workingArr.length){
        const type = workingArr[index].type
        // TODO: Make this one the last statement
        if(type === 'center'){
            const livingNeighbors = centerNeighbors(index, gridSize, currentArr)
            cellLogic(workingArr, index, livingNeighbors)
        }
        //index 0
        else if(index === 0){
            const livingNeighbors = topLeftNeighbors(gridSize, currentArr)
            cellLogic(workingArr, index, livingNeighbors)
        }
        //index n-1
        else if(index === gridSize-1){
            const livingNeighbors = topRightNeigbors(index, gridSize, currentArr)
            cellLogic(workingArr, index, livingNeighbors)
        }
        //index (n^2)-n
        else if(index === gridSquared - gridSize){
            const livingNeighbors = bottomLeftNeighbors(index, gridSize, currentArr)
            cellLogic(workingArr, index, livingNeighbors)
        }
        //index (n^2)-1
        else if(index === gridSquared - 1){
            const livingNeighhors = bottomRightNeighbors(index, gridSize, currentArr, gridSquared)
            cellLogic(workingArr, index, livingNeighhors)
        }
    }
}
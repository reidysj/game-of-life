import {makeSquare, makeHwss, makeLwss, makeMwss, makeSpinner, makeToad, makeBeacon, makeGlider, makeTub, makeBoat, makeLoaf, makeHive, makeDeca, makePulsar} from '../utils/specialClicks'
import store from '../redux/store'

export const handleClick = (cell, cellIndex, setViewingArray) => {
    const state = store.getState()
    const isRunning = state.isRunning
    const viewingArray = state.viewingArray
    const typeClick = state.typeClick
    const gridSize = state.gridSize

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
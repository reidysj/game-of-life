import React from 'react'
import {Grid as CUGrid} from '@chakra-ui/core'
import {Cell} from './styles'
import {makeSquare, makeHwss, makeLwss, makeMwss, makeSpinner, makeToad, makeBeacon, makeGlider, makeTub, makeBoat, makeLoaf, makeHive, makeDeca, makePulsar} from '../utils/specialClicks'
import {setViewingArray} from '../redux/actions'
import { connect } from 'react-redux'

const Grid = ({viewingArray, gridSize, typeClick, isRunning, setViewingArray, color}) => {
  
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

    return(
        <>
        <CUGrid margin={['0 auto', '0 auto', '0 auto', 'inherit']}templateColumns={`repeat(${gridSize}, 1fr)`} templateRows={`repeat(${gridSize}, 1fr)`} width={['95vw', '95vw', '95vw', '700px']} height={['95vw', '95vw', '95vw', '700px']}>
            {viewingArray.map((cell, index) => {
                return(
                    <Cell key={index} onClick={() => handleClick(cell, index)} isAlive={cell.isAlive} color={color}/>
                )
            })}
        
        </CUGrid>
        </>
    )
}

const mStP = state => {
    return {
        viewingArray: state.viewingArray,
        gridSize: state.gridSize,
        typeClick: state.typeClick,
        isRunning: state.isRunning,
        color: state.color
    }
}

export default connect(mStP, {setViewingArray})(Grid)
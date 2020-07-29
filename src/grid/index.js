import React from 'react'
import {GridBody, Cell} from './styles'

const Grid = ({gridSize, viewingArray, handleClick}) => {

    return(
        <>
        <GridBody gridSize={gridSize}>
            {viewingArray.map((cell, index) => {
                return(
                    <Cell key={index} onClick={_ => handleClick(cell, index)} isAlive={cell.isAlive}/>
                )
            })}
        
        </GridBody>
        </>
    )
}

export default Grid
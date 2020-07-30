import React, {useState, useEffect} from 'react'
import {GridBody, Cell} from './styles'

const Grid = ({gridSize, viewingArray, handleClick, color}) => {


    return(
        <>
        <GridBody gridSize={gridSize}>
            {viewingArray.map((cell, index) => {
                return(
                    <Cell key={index} onClick={_ => handleClick(cell, index)} isAlive={cell.isAlive} color={color}/>
                )
            })}
        
        </GridBody>
        </>
    )
}

export default Grid
import React from 'react'
import {Grid as CUGrid} from '@chakra-ui/core'
import {Cell} from './styles'

const Grid = ({gridSize, viewingArray, handleClick, color}) => {


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

export default Grid
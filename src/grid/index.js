import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const GridBody = styled.div`
    width: 700px;
    height: 700px;
    display: grid;
    grid-template-columns: repeat(${props => props.gridSize}, 1fr); 
    grid-template-rows: repeat(${props => props.gridSize}, 1fr);
`
const Cell = styled.div`
    border: 1px solid black;
    background-color: ${props => props.isAlive ? 'black' : 'white'};
`

const Grid = () => {
    const initialCell = {
        isAlive: false
    }
    const [gridSize, setGridSize] = useState(25)
    const [viewingArray, setViewingArray] = useState(Array(gridSize*gridSize).fill(initialCell))
    const [workingArray, setWorkingArray] = useState([])

    const handleClick = (cell, cellIndex) => {
        setViewingArray(viewingArray.map((item, index) => (index === cellIndex ? {...item, isAlive: !item.isAlive} : item)))
    }
    
    console.log(viewingArray)
    return(
        <GridBody gridSize={gridSize}>
            {viewingArray.map((cell, index) => {
                return(
                    <Cell key={index} onClick={_ => handleClick(cell, index)} isAlive={cell.isAlive}/>
                )
            })}
        
        </GridBody>
    )
}

export default Grid
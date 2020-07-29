import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {setCells} from '../utils/setCells'
import {useInterval} from '../utils/useInterval'
import Form from './form'

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
    const [interval, setInterval] = useState(700)
    const [viewingArray, setViewingArray] = useState(Array(gridSize*gridSize).fill(initialCell))
    const [isRunning, setIsRunning] = useState(false)

    const handleClick = (cell, cellIndex) => {
        if(!isRunning){
            setViewingArray(viewingArray.map((item, index) => (index === cellIndex ? {...item, isAlive: !item.isAlive} : item)))
        }
    }

    const handleClear = () => {
        setViewingArray(Array(gridSize*gridSize).fill(initialCell))
        if(isRunning){
            setIsRunning(false)
        }
    }

    const handleRunSimulation = e => {
        setIsRunning(!isRunning)
    }

    useInterval(() => {
        if(isRunning){
            setViewingArray(viewingArray => setCells(viewingArray, gridSize))
        }
    }, interval)

    const handleSubmit = (e, inputs) => {
        e.preventDefault()
        setGridSize(inputs.gridSize)
        setInterval(inputs.interval)
    }
    
    const handleRandom = () => {
        const random = []
        for(let i = 0; i < gridSize * gridSize; i++){
            const value = Math.round(Math.random())
            if(value === 0){
                random.push({isAlive: false})
            }else{
                random.push({isAlive: true})
            }
        }
        setViewingArray(random)
    }

    return(
        <>
        <Form handleSubmit={handleSubmit} setInterval={setInterval}/>
        <button onClick={e => handleRunSimulation(e)}>{!isRunning? 'Start Simulation' : 'Stop Simulation'}</button>
        <button onClick={handleRandom}>random grid</button>
        <button onClick={handleClear} >Clear Grid</button>
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
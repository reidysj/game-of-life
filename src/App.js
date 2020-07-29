import React, {useState} from 'react';
import {setCells} from './utils/setCells'
import {useInterval} from './utils/useInterval'
import Grid from './grid'
import Information from './information'
import Form from './form'
import {ThemeProvider, CSSReset, Flex, Text, Heading} from '@chakra-ui/core'

function App() {
  const initialCell = {
    isAlive: false
}
const [color, setColor] = useState('#000000')
const [gridSize, setGridSize] = useState(25)
const [interval, setInterval] = useState(700)
const [viewingArray, setViewingArray] = useState(Array(gridSize*gridSize).fill(initialCell))
const [isRunning, setIsRunning] = useState(false)
const [count, setCount] = useState(0)

const handleSubmit = (e, inputs) => {
  e.preventDefault()
  setGridSize(inputs.gridSize)
  setInterval(inputs.interval)
  setColor(inputs.color)
}

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
        setCount(count+1)
        setViewingArray(viewingArray => setCells(viewingArray, gridSize))
    }
}, interval)



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
  return (
    <ThemeProvider>
      <CSSReset />

      <Heading textAlign='center'>Conway's Game of Life</Heading>
      <Text textAlign='center'>Count: {count}</Text>
      <Flex direction='row-reverse' justify='space-evenly'>
      <Form isRunning={isRunning} handleSubmit={handleSubmit} handleRandom={handleRandom} handleClear={handleClear} handleRunSimulation={handleRunSimulation}/>
      <Grid gridSize={gridSize} viewingArray={viewingArray} handleClick={handleClick} color={color}/>
      </Flex>
      <Information />

    </ThemeProvider>
  );
}

export default App;

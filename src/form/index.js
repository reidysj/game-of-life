import React, {useState} from 'react'
import {Button, Input, Flex, Select, Text} from '@chakra-ui/core'
import TopForm from './TopForm'
import {setGridSize, setColor, setViewingArray, setCount, setIsRunning, setNewInterval} from '../redux/actions'
import {connect} from 'react-redux'


const Form = ({isRunning, gridSize, setIsRunning, setViewingArray, setGridSize, setColor, interval, color, setNewInterval, setCount}) => {
  const [steps, setSteps] = useState(1)

    const initialCell = {
        isAlive: false
    }

    const handleChange = e => {
        if(e.target.name === 'color'){
          setColor(e.target.value)
        }
        if(e.target.name === 'gridSize'){
          setGridSize(Number(e.target.value))
          setCount(0)
          if(gridSize !== e.target.value){
            setViewingArray(Array(e.target.value*e.target.value).fill(initialCell))
          }
        }
        if(e.target.name === 'interval'){
          setNewInterval(e.target.value)
        }
        if(e.target.name === 'steps'){
          setSteps(e.target.value)
        }

    }


      const handleClear = () => {
        setCount(0);
        setViewingArray(Array(gridSize * gridSize).fill(initialCell));
        if (isRunning) {
          setIsRunning(false);
        }
      };

    return(
      <Flex direction='column' justify='space-around' backgroundColor='white' padding='2.5vw' border='1px solid black' width={['95vw', '95vw', '95vw', 'auto']} margin={['20px auto', '20px auto', '20px auto', 'inherit']} >
        <TopForm handleChange={handleChange} steps={steps} setCount={setCount} gridSize={gridSize} isRunning={isRunning} setIsRunning={setIsRunning} setViewingArray={setViewingArray}/>
        <Button variantColor='blue' variant='outline' onClick={handleClear} >Clear Grid</Button>
        <hr />
            <Text>Grid Size</Text>
            <Select name='gridSize' onChange={handleChange} textAlign='center'>
                <option value='25'>25x25</option>
                <option value='35'>35x35</option>
                <option value='40'>40x40</option>
                <option value='50'>50x50</option>
                <option value='60'>60x60</option>
                <option value='65'>65x65</option>
                <option value='70'>70x70‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‎‎‎‎‎⚠</option>
                <option value='60'>75x75‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎‏‏‎ ‎ ‎⚠</option>
                <option value='65'>80x80‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎ ‎‏‏‎ ‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‎‏‏‎‏‏‎ ‎ ‎⚠</option>
                <option value='70'>90x90‏‏‎ ‎‏‏‎ ‏‏‎ ‎‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎  ‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎ ‎‏‏‎ ‎‏‏‎ ‎⚠</option>
                <option value='100'>100x100‏‏‎ ‎‏‏‎ ‏‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‏‏‎ ‎‏‏‎ ‎‏‏‎‎‏‏‎ ‎‏‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏‎ ‎‏‏ ‎ ‎‎⚠</option>
            </Select>
            <Text textAlign='center'>Speed</Text>
            <Input type='number' name='interval' onChange={handleChange} value={interval}></Input>
            <Text textAlign='center'>Cell Color</Text>
            <Input type='color' name='color' onChange={handleChange} value={color} />
        </Flex>
    )
}

const mStP = state => {
    return{
        isRunning: state.isRunning,
        gridSize: state.gridSize,
        interval: state.interval,
        color: state.color

    }
}

export default connect(mStP, {setGridSize, setNewInterval, setCount, setColor, setViewingArray, setIsRunning})(Form)
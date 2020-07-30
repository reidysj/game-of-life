import React from 'react'
import {Flex, Button, Select} from '@chakra-ui/core'
import {setCells} from '../utils/setCells'
import {connect} from 'react-redux'

const TopForm = ({count, handleChange, viewingArray, isRunning, setIsRunning, gridSize, steps, setViewingArray, setCount}) => {
    
    const handleRandom = () => {
        const random = [];
        for (let i = 0; i < gridSize * gridSize; i++) {
          const value = Math.round(Math.random());
          if (value === 0) {
            random.push({ isAlive: false });
          } else {
            random.push({ isAlive: true });
          }
        }
        setViewingArray(random);
      };
    
      const handleSteps = (e, num=1) => {
        let hiddenArray = JSON.parse(JSON.stringify(viewingArray))
        for(let i = 1; i<=num; i++){
          hiddenArray = setCells(hiddenArray, gridSize)
        }
        setCount(count+Number(num))
        setViewingArray([...hiddenArray])
      }

      const handleRunSimulation = (e) => {
        setIsRunning(!isRunning);
      };

    return(
        <>
        <Button variantColor={isRunning ? 'red' : 'green'} variant='outline' onClick={e => handleRunSimulation(e)}>{!isRunning? 'Start Simulation' : 'Stop Simulation'}</Button>
        <Button variantColor='blue' variant='outline' onClick={handleRandom} isDisabled={isRunning}>Random Grid</Button>
        <Flex>
            <Select name='steps' onChange={handleChange} width='30%'>
                <option value='0'>1</option>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
            </Select>
        <Button mx='5px' variantColor="blue" fontSize='sm'  variant="outline" onClick={e => handleSteps(e, steps)} isDisabled={isRunning} width='65%'>{`Advance ${steps} Generation${steps > 1 ? 's' : ''}`}</Button>
        </Flex>
        </>
    )
}

const mStP = state => {
    return{
        count: state.count,
        viewingArray: state.viewingArray

    }
}

export default connect(mStP)(TopForm)
import React, {useState} from 'react'
import {Button, Input, Flex, Select, Text} from '@chakra-ui/core' 


const Form = ({handleSubmit, handleRunSimulation, isRunning, handleRandom, handleClear, handleSteps}) => {
    const [inputs, setInputs] = useState({
        gridSize: 25,
        interval: 700,
        color: '#000000',
        steps: 1
    })

    const handleChange = e => {
        if(e.target.name === 'color'){
            setInputs({
                ...inputs,
                color: e.target.value
            })
        } else {
            
            setInputs({
                ...inputs,
                [e.target.name]: Number(e.target.value)
            })
        }
    }

    return(
        <Flex direction='column' justify='space-around' backgroundColor='white' padding='2.5vw' border='1px solid black' width={['95vw', '95vw', '95vw', 'auto']} margin={['20px auto', '20px auto', '20px auto', 'inherit']} >
        <Button variantColor={isRunning ? 'red' : 'green'} variant='outline' onClick={e => handleRunSimulation(e)}>{!isRunning? 'Start Simulation' : 'Stop Simulation'}</Button>
        <Button variantColor='blue' variant='outline' onClick={handleRandom}>Random Grid</Button>
        <Flex>
            <Select name='steps' onChange={handleChange} width='30%'>
                <option value='0'>1</option>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='15'>15</option>
                <option value='20'>20</option>
            </Select>
        <Button mx='5px' variantColor="blue" fontSize='xs'  variant="outline" onClick={e => handleSteps(e, inputs.steps)} isDisabled={isRunning} width='65%'>{`Advance ${inputs.steps} Generation${inputs.steps > 1 ? 's' : ''}`}</Button>
        </Flex>
        <Button variantColor='blue' variant='outline' onClick={handleClear} >Clear Grid</Button>
        <form onSubmit={e => handleSubmit(e, inputs)}>
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
            <Input type='number' name='interval' onChange={handleChange} value={inputs.interval}></Input>
            <Text textAlign='center'>Cell Color</Text>
            <Input type='color' name='color' onChange={handleChange} value={inputs.color} />
            <Button width='100%' variantColor='green' type='submit' my='1rem'>Submit</Button>
        </form>
        </Flex>
    )
}

export default Form
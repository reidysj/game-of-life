import React, {useState} from 'react'
import {Button, Menu, MenuButton, MenuList, MenuItem, Flex} from '@chakra-ui/core'

const Clicks = ({setTypeClick}) => {
    const [stampType, setStampType] = useState('')



    return(
        <Flex width={['100%', '100%', '100%','20%']}direction={['row', 'row', 'row','column']} justify='space-evenly' align='center' display={['none', 'none', 'flex', 'flex', 'flex']}>
        <Menu>
            <MenuButton as={Button} variant='outline' variantColor='blue' rightIcon='chevron-down' width='90%'>
                {stampType === 'still' ? 'Still Lifes' : stampType === 'osc' ? 'Oscilators' : stampType === 'ship' ? 'Spaceships' : 'Stamp Types'}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={_ => setStampType('still')}>Still Lifes</MenuItem>
                <MenuItem onClick={_ => setStampType('osc')}>Oscillators</MenuItem>
                <MenuItem onClick={_ => setStampType('ship')}>Spaceships</MenuItem>
            </MenuList>
        </Menu>
        <Button variant='solid' variantColor='teal' width='50%' onClick={e => setTypeClick('cell')}>Single Cell</Button>

        {stampType === 'osc' ? (
            <>
            <Button variant='solid' variantColor='teal' width='50%' onClick={e => setTypeClick('line')}>Spinner</Button>
            <Button variant='solid' variantColor='teal' width='50%' onClick={e => setTypeClick('toad')}>Toad</Button>
            <Button variant='solid' variantColor='teal' width='50%' onClick={e => setTypeClick('beacon')}>Beacon</Button>
            <Button variant='solid' variantColor='teal' width='50%' onClick={e => setTypeClick('deca')}>P-Deca</Button>
            <Button variant='solid' variantColor='teal' width='50%' onClick={e => setTypeClick('pulsar')}>Pulsar</Button>
            </>
        ):
        stampType === 'ship' ? (
            <>
            <Button variant='solid' variantColor='teal' width='50%' onClick ={e => setTypeClick('glider')}>Glider</Button>
            <Button variant='solid' variantColor='teal' width='50%' onClick = {_ => setTypeClick('lwss')}>LWSS</Button>
            <Button variant='solid' variantColor='teal' width='50%' onClick = {_ => setTypeClick('mwss')}>MWSS</Button>
            <Button variant='solid' variantColor='teal' width='50%'onClick = {_ => setTypeClick('hwss')}>HWSS</Button>
            </>
        ):
        <>
            <Button variant='solid' variantColor='teal' width='50%' onClick={e => setTypeClick('square')}>Block</Button>
            <Button variant='solid' variantColor='teal' width='50%' onClick={e => setTypeClick('tub')}>Tub</Button>
            <Button variant='solid' variantColor='teal' width='50%' onClick={e => setTypeClick('hive')}>Beehive</Button>
            <Button variant='solid' variantColor='teal' width='50%' onClick={e => setTypeClick('loaf')}>Loaf</Button>
            <Button variant='solid' variantColor='teal' width='50%' onClick={e => setTypeClick('boat')}>Boat</Button>
        </>
        }
        </Flex>
    )

}

export default Clicks
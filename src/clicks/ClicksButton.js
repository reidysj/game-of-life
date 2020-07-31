import React from 'react'
import {Button} from '@chakra-ui/core'

const ClicksButton = ({setTypeClick, typeClick, text}) => {
    return(
        <Button variant='solid' variantColor='teal' width='50%' onClick={e => setTypeClick(typeClick)}>{text}</Button>
    )
}

export default ClicksButton
import React from 'react'
import ClicksButton from './ClicksButton'
import {ships} from './clickObjects'

const Ships = ({setTypeClick}) => {

    return ships.map(ship => (
        <ClicksButton text={ship.text} typeClick={ship.typeClick} key={ship.typeClick} setTypeClick={setTypeClick}/>
    ))
}

export default Ships
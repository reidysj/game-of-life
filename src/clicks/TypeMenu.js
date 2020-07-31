import React from 'react'
import {Menu, MenuButton, MenuList, MenuItem, Button} from '@chakra-ui/core'

const TypeMenu = ({stampType, setStampType}) => {

    return(
        <Menu>
        <MenuButton
          as={Button}
          variant="outline"
          variantColor="blue"
          rightIcon="chevron-down"
          width="90%"
        >
          {stampType === "still"
            ? "Still Lifes"
            : stampType === "osc"
            ? "Oscilators"
            : stampType === "ship"
            ? "Spaceships"
            : "Stamp Types"}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={(_) => setStampType("still")}>
            Still Lifes
          </MenuItem>
          <MenuItem onClick={(_) => setStampType("osc")}>Oscillators</MenuItem>
          <MenuItem onClick={(_) => setStampType("ship")}>Spaceships</MenuItem>
        </MenuList>
      </Menu>

    )
}

export default TypeMenu
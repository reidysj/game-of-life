import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/core";

const TypeMenu = ({ stampType, setStampType, setIsWide, isWide }) => {


  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="outline"
        variantColor="blue"
        rightIcon="chevron-down"
        width={['97%', '97%', '97%', '70%']}
        display={[isWide ? 'none':'inherit', isWide ? 'none':'inherit', isWide ? 'none': 'inherit', 'inherit']}
      >
        {stampType === "still"
          ? "Still Lifes"
          : stampType === "osc"
          ? "Oscilators"
          : stampType === "ship"
          ? "Spaceships"
          : "Stamp Types"}
      </MenuButton>
      <MenuList width='inherit' onClick={_ => setIsWide(!isWide)}>
        <MenuItem onClick={(_) => setStampType("still")}>Still Lifes</MenuItem>
        <MenuItem onClick={(_) => setStampType("osc")}>Oscillators</MenuItem>
        <MenuItem onClick={(_) => setStampType("ship")}>Spaceships</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default TypeMenu;

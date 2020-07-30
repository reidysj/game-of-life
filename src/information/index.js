import React, { useState } from "react";
import { Flex, Heading, useDisclosure, Button } from "@chakra-ui/core";
import { options } from "../utils/modalTexts";
import RulesModal from "./Modal";

const Information = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [choice, setChoice] = useState("rules");

  const handleChoice = (option) => {
    setChoice(option);
    onOpen();
  };

  return (
    <>
      <Heading as="h2" fontSize="1.8rem" textAlign="center" my="2rem">
        A Cellular Automaton Simulation
      </Heading>
      <Flex width="80%" margin="10px auto" direction="column" textAlign="center">
          <Flex direction={['column', 'column', 'column', 'row']}justify='space-evenly'>
        {options.map((option) => (
          <Button variant='outline' variantColor='teal' onClick={(e) => handleChoice(option.name)} my='5px' key={option.name}>
            {option.text}
          </Button>
        ))}

          </Flex>
        <RulesModal isOpen={isOpen} onClose={onClose} choice={choice} />
      </Flex>
    </>
  );
};
export default Information;

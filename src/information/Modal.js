import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/core";
import { text } from "../utils/modalTexts";

const RulesModal = ({ isOpen, onClose, choice }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader textAlign="center">{text[choice].title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="" lineHeight="1.5rem">
          <Text>{text[choice].text}</Text>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};
export default RulesModal;

import React from "react";
import { Text, Input } from "@chakra-ui/core";

const BottomForm = ({ handleChange, interval, color }) => {
  return (
    <>
      <Text textAlign="center">Speed (ms)</Text>
      <Input
        type="number"
        name="interval"
        onChange={handleChange}
        value={interval}
      ></Input>
      <Text textAlign="center">Cell Color</Text>
      <Input type="color" name="color" onChange={handleChange} value={color} />
    </>
  );
};

export default BottomForm;

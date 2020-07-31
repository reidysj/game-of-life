import React from "react";
import { Text, Input } from "@chakra-ui/core";
import {connect} from 'react-redux'
import { setNewInterval, setColor } from "../redux/actions";

const BottomForm = ({ setNewInterval, setColor, interval, color }) => {



  return (
    <>
      <Text textAlign="center">Speed (ms)</Text>
      <Input
        type="number"
        name="interval"
        onChange={e => setNewInterval(e.target.value)}
        value={interval}
      ></Input>
      <Text textAlign="center">Cell Color</Text>
      <Input type="color" name="color" onChange={e => setColor(e.target.value)} value={color} />
    </>
  );
};

const mStP = state => {
  return{
    ...state,
    interval: state.interval,
    color: state.color,
  }
}

export default connect(mStP, {setNewInterval, setColor})(BottomForm)
import React from "react";
import {connect} from 'react-redux'
import { Button } from "@chakra-ui/core";

const ClicksButton = ({ setTypeClick, typeClick, text, stateClick }) => {
  return (
    <Button
      variant={stateClick === typeClick ? 'solid' : 'outline'}
      variantColor="teal"
      width="50%"
      onClick={(e) => setTypeClick(typeClick)}
    >
      {text}
    </Button>
  );
};

const mStP = state => {
  return{
    stateClick: state.typeClick
  }
}


export default connect(mStP, {})(ClicksButton)

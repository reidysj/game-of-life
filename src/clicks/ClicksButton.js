import React from "react";
import {connect} from 'react-redux'
import { Button } from "@chakra-ui/core";

const ClicksButton = ({ setTypeClick, typeClick, text, stateClick, isWide, setIsWide }) => {

  const handleMobile = () => {
    setTypeClick(typeClick)
    if(isWide){
      setIsWide(!isWide)
    }
  }

  return (
    <Button
      variant={stateClick === typeClick ? 'solid' : 'outline'}
      variantColor="teal"
      width="50%"
      display={[isWide ? 'inherit' : 'none', isWide ? 'inherit': 'none', isWide? 'inherit': 'none', 'inherit']}
      onClick={handleMobile}
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

import React from 'react';
import { Input } from '@chakra-ui/react';
const LineInput = props => {
  return (
    <Input
      variant="outline"
      fontFamily="Poppins"
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      borderColor="rgba(0, 40, 104, 0.7)"
      padding="15px"
      height="50px"
      maxWidth="462px"
    />
  );
};

export default LineInput;

import React from "react";
import styled from "styled-components";

const Box = styled.p`
  background-color: white;
`;

const Text = styled.p`
  color: red;
  font-size: 24px;
  text-align: center;
`;

const Errors = ({ children }) => {
  return (
    <Box>
      <Text>{children}</Text>
    </Box>
  );
};

export default Errors;

import React from "react";
import styled from "styled-components";

const Loading = styled.div`
  border: 16px solid #efeef5;
  border-top: 16px #0c0572 solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
const Spinner = () => {
  return (
    <div>
      <Loading />
    </div>
  );
};

export default Spinner;

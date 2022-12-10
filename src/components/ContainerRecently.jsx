import React from "react";
import styled from "styled-components";
import { useMovies } from "../hooks/useMovies";
import CardRecently from "./CardRecently";

const ContainerRecently = () => {
  const { recentlyAdd } = useMovies();
  return (
    <Flex>
      {recentlyAdd?.slice(0, 5).map((item) => (
        <CardRecently card={item} key={item.id} />
      ))}
    </Flex>
  );
};
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

export default ContainerRecently;

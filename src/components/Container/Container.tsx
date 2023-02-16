import React from "react";
import { useMovies } from "../../hooks/useMovies.js";
import Spinner from "../../utils/Spinner.js";

const Container = ({ children }) => {
  const { isLoading } = useMovies();

  if (isLoading)
    return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Spinner />
      </div>
    );
  return <div>{children}</div>;
};

export default Container;

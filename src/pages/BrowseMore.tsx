import React from "react";
import { Link } from "react-router-dom";

const BrowseMore = () => {
  return (
    <>
      <div
        style={{
          paddingTop: "2rem",
          paddingLeft: "2rem",
        }}
      >
        <Link
          style={{
            textDecoration: "none",
            backgroundColor: "#227ca5",
            padding: "1rem",
            color: "white",
          }}
          to="/"
        >
          Back Homepage
        </Link>
      </div>
      <div
        style={{ textAlign: "center", paddingTop: "10rem", fontSize: "34px" }}
      >
        Page in progress
      </div>
    </>
  );
};

export default BrowseMore;

import React from "react";
import styled from "styled-components";
import Home from "../pages/Home";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <Container>
      <Navbar />
      <Width>
        <Home />
      </Width>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Width = styled.div`
  width: 100%;
`;

export default Layout;

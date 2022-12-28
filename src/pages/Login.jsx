import React from "react";
import styled from "styled-components";
import img from "../img/bg-login.jpg";
import Footer from "../layout/Footer";
import FormLogin from "../components/Form/FormLogin";
import Nav from "../components/Nav";

const ImgBg = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url(${img});
`;

const Container = styled.div`
  padding-top: 2rem;
  margin: auto;
  width: 90%;
  color: white;
  @media (min-width: 768px) {
    padding-top: 6rem;
    width: 35%;
  }
`;

const BoxFooter = styled.div`
  background-color: white;
  bottom: 0;
  width: 100%;
  @media (min-width: 768px) {
    position: fixed;
  }
`;

const Login = () => {
  return (
    <ImgBg>
      <Nav />
      <Container>
        <FormLogin />
      </Container>
      <BoxFooter>
        <Footer />
      </BoxFooter>
    </ImgBg>
  );
};

export default Login;

import React from "react";
import styled from "styled-components";
import img from "../img/bg-login.jpg";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import FormLogin from "../components/Form/FormLogin";

const Login = () => {
  return (
    <ImgBg>
      <Logo to="/">Netflix App</Logo>
      <Container>
        <FormLogin />
      </Container>
      <BoxFooter>
        <Footer />
      </BoxFooter>
    </ImgBg>
  );
};

const ImgBg = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url(${img});
`;

const Container = styled.div`
  padding-top: 12rem;
  margin: auto;
  width: 35%;
  color: white;
`;

const Logo = styled(Link)`
  position: fixed;
  top: 0;
  width: 100%;
  padding-top: 3rem;
  padding-left: 6rem;
  font-size: 24px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  margin: 0;
`;

const BoxFooter = styled.div`
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export default Login;

import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Box>
      <Container>
        <BoxNav>
          <Nav>
            <A href="#">About</A>
            <A href="#">Jobs</A>
            <A href="#">Press</A>
            <A href="#">News</A>
            <A href="#">Gift</A>
          </Nav>
          <Nav>
            <TextNav href="#">Legal</TextNav>
            <TextNav href="#">Cookies</TextNav>
            <TextNav href="#">AdChoices</TextNav>
          </Nav>
        </BoxNav>
        <BoxNav>
          <Nav>
            <A href="#">Facebook</A>
            <A href="#">Twitter</A>
          </Nav>
          <Text>© 2007-2014 MovieRountable</Text>
        </BoxNav>
      </Container>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  margin-top: 3rem;
  padding-bottom: 2rem;
`;

const Container = styled.div`
  display: flex;
  padding-left: 7rem;
  padding-right: 7rem;
  justify-content: space-between;
`;

const BoxNav = styled.div``;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const A = styled.a`
  margin-bottom: 1rem;
  text-decoration: none;
  color: black;
  font-weight: 700;
  font-size: 22px;
`;
const TextNav = styled.a`
  margin-bottom: 1rem;
  text-decoration: none;
  color: black;
  font-weight: 400;
  font-size: 20px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 20px;
`;

export default Footer;

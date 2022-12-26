import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  margin-top: 3rem;
  padding-bottom: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 0rem;
  padding-right: 0rem;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    padding-left: 7rem;
    padding-right: 7rem;
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 5px;
  justify-content: center;
  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const TextNav = styled.a`
  margin-bottom: 1rem;
  text-decoration: none;
  font-weight: 400;
  font-size: 20px;
  color: ${(props) => props.colorProp};
`;

const A = styled.a`
  margin-bottom: 1rem;
  text-decoration: none;
  color: ${(props) => props.colorProp};
  font-weight: 700;
  font-size: 22px;
`;

const Text = styled.p`
  margin: 0;
  font-size: 20px;
  color: ${(props) => props.colorProp};
`;

const Footer = ({ color }) => {
  return (
    <Box>
      <Container>
        <div>
          <Nav>
            <A colorProp={color ? "white" : "black"} href="#">
              About
            </A>
            <A colorProp={color ? "white" : "black"} href="#">
              Jobs
            </A>
            <A colorProp={color ? "white" : "black"} href="#">
              Press
            </A>
            <A colorProp={color ? "white" : "black"} href="#">
              News
            </A>
            <A colorProp={color ? "white" : "black"} href="#">
              Gift
            </A>
          </Nav>
          <Nav>
            <TextNav colorProp={color ? "white" : "black"} href="#">
              Legal
            </TextNav>
            <TextNav colorProp={color ? "white" : "black"} href="#">
              Cookies
            </TextNav>
            <TextNav colorProp={color ? "white" : "black"} href="#">
              AdChoices
            </TextNav>
          </Nav>
        </div>
        <div>
          <Nav>
            <A colorProp={color ? "white" : "black"} href="#">
              Facebook
            </A>
            <A colorProp={color ? "white" : "black"} href="#">
              Twitter
            </A>
          </Nav>
          <Text colorProp={color ? "white" : "black"}>
            © 2007-2014 MovieRountable
          </Text>
        </div>
      </Container>
    </Box>
  );
};

export default Footer;

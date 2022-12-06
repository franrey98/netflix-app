import React from "react";
import styled from "styled-components";
import img from "../img/pulpfiction.jpg";

const Navbar = () => {
  return (
    <ImgBg>
      <Conteiner>
        <FlexItems>
          <Title>Netflix App</Title>
          <Button>Browse +</Button>
        </FlexItems>
        <FlexItems>
          <Title>Login</Title>
          <ButtonSignUp>Sign Up</ButtonSignUp>
        </FlexItems>
      </Conteiner>
      <ConteinerMain>
        <TextMain>Your favourite movies.Explained.</TextMain>
        <Text>Figure out what happened. Then find out why.</Text>
        <InputSearch placeholder="*  Search for a movie..." />
      </ConteinerMain>
    </ImgBg>
  );
};

// Uno lleva a pagina de inicio, el otro al login.
const Title = styled.h2`
  font-size: 1.5em;
  text-align: center;
  color: #ffffff;
`;

const Conteiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 2rem;
  padding-left: 10rem;
  padding-right: 10rem;
`;

const FlexItems = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const Button = styled.button`
  font-size: 1.5em;
  font-weight: 700;
  text-align: center;
  color: #ffffff;
  border: none;
  background: none;
  cursor: pointer;
`;

const ButtonSignUp = styled.button`
  font-size: 1.5em;
  text-align: center;
  color: #be697e;
  border: 2px solid;
  border-radius: 2rem;
  cursor: pointer;
  padding-left: 22px;
  padding-right: 22px;
  padding-top: 6px;
  padding-bottom: 6px;
  font-weight: 600;
`;

const ConteinerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-left: 7rem;
  padding-right: 7rem;
`;

const TextMain = styled.h1`
  font-size: 2.8rem;
  margin-top: 5rem;
  margin-bottom: 0;
  text-align: center;
  color: #ffffff;
`;
const Text = styled.p`
  font-size: 28px;
  text-align: center;
  color: #ffffff;
`;
const InputSearch = styled.input`
  border: 1px solid;
  margin-top: 1rem;
  padding-left: 3rem;
  padding-right: 9rem;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 3rem;
  font-size: 20px;
  color: #532434;
`;

const ImgBg = styled.div`
  width: 100%;
  height: 40rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url(${img});
`;
export default Navbar;

import React from "react";
import styled from "styled-components";
import img from "../img/spiderman.jpeg";
import Form from "./Form/Form";

const ImgBg = styled.div`
  height: 60rem;
  width: 100%;
  margin-top: 5rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.55)),
    url(${img});
  background-position: center;
  @media (min-width: 768px) {
    background-position: top;
    height: 40rem;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 60rem;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 10px 0 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    height: 40rem;
  }
`;
const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
`;
const TextMain = styled.h3`
  font-size: 34px;
  font-weight: 700;
  color: white;
`;
const Text = styled.p`
  font-size: 24px;
  font-weight: 400;
  color: white;
`;
const List = styled.ul`
  padding-left: 20px;
  font-weight: 700;
  color: white;
`;

const ItemList = styled.li`
  color: white;
  font-size: 18px;
`;

const CreateAccount = () => {
  return (
    <ImgBg id="createAccount">
      <Container>
        <ContainerText>
          <TextMain>Want to Annotate?</TextMain>
          <Text>
            Are you a writer? Feel like you could provide
            <br /> some a great feedback on a movies. Here are the
            <br /> features and benefits of becoming a member.
          </Text>
          <List>
            <ItemList>Discuss movies with friends</ItemList>
            <ItemList>Build your collection of discussed films</ItemList>
            <ItemList>Save your favourite movies</ItemList>
          </List>
        </ContainerText>
        <Form />
      </Container>
    </ImgBg>
  );
};

export default CreateAccount;

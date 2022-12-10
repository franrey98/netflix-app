import React from "react";
import styled from "styled-components";
import img from "../img/pulpfiction.jpg";
import Form from "./Form";

const CreateAccount = () => {
  return (
    <ImgBg>
      <Container>
        <div>
          <h1>Probando</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            perspiciatis optio et officiis ex ipsum? Iste ab molestias debitis
            fugit saepe, dicta voluptas. Inventore ea nihil, nesciunt
            consequatur ipsa cum.
          </p>
          <ul>
            <li>Lalalalala lalalal lalala</li>
            <li>Lalalalala lalalal lalala</li>
            <li>Lalalalala lalalal lalala</li>
          </ul>
        </div>
        <Form />
      </Container>
    </ImgBg>
  );
};

const ImgBg = styled.div`
  height: 40rem;
  width: 100%;
  margin-top: 5rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)),
    url(${img});
`;
const Container = styled.div`
  display: flex;
  height: 40rem;
`;

export default CreateAccount;

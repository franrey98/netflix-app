import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("enviar formulario", data);
    reset();
  };

  return (
    <Container>
      <Title>Create Account</Title>
      <FormAccount onSubmit={handleSubmit(onSubmit)}>
        <StyleName>
          <div>
            <Input
              placeholder="Name"
              type="text"
              {...register("name", {
                required: true,
                maxLength: 15,
              })}
            />
            {errors.name?.type === "required" && <p>El campo es requerido</p>}
          </div>
          <div>
            <Input
              placeholder="Last Name"
              type="text"
              {...register("lastname")}
            />
          </div>
        </StyleName>
        <ContainerInput>
          <Input
            placeholder="Email"
            type="email"
            {...register("email", {
              pattern: /\S+@\S+\.\S+/,
            })}
          />
          {errors.email?.type === "pattern" && (
            <p>El formato del email es incorrecto</p>
          )}
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="Password"
            type="password"
            {...register("password")}
          />
        </ContainerInput>
        <BoxFlex>
          <p>
            Already have an account?{" "}
            <ButtonLink to="/login">Sign In</ButtonLink>
          </p>
          <Button type="submit">Create Account</Button>
        </BoxFlex>
      </FormAccount>
    </Container>
  );
};

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
  color: white;
  font-size: 28px;
  font-weight: 700;
`;

const FormAccount = styled.form``;

const StyleName = styled.div`
  display: flex;
  gap: 2rem;
`;

const ContainerInput = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`;
const Input = styled.input`
  padding: 10px 10px 10px 15px;

  border-radius: 5px;
  border: none;
  width: 100%;
`;

const BoxFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  border-radius: 2rem;
  padding: 15px;
  font-weight: 700;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #c85a14;
  cursor: pointer;
  border: none;
`;

const ButtonLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  color: #c85a14;
`;

export default Form;

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
          <div style={{ width: "100%" }}>
            <Input
              placeholder="   Name"
              type="text"
              {...register("name", {
                required: true,
                maxLength: 15,
              })}
            />
            {errors.name?.type === "required" && <p>El campo es requerido</p>}
          </div>
          <div style={{ width: "100%" }}>
            <Input
              placeholder="   Last Name"
              type="text"
              {...register("lastname", {
                required: true,
                maxLength: 15,
              })}
            />
            {errors.lastname?.type === "required" && (
              <p>El campo es requerido</p>
            )}
          </div>
        </StyleName>
        <ContainerInput>
          <Input
            placeholder="   Email"
            type="email"
            {...register("email", {
              required: true,
              pattern: /\S+@\S+\.\S+/,
            })}
          />
          {errors.email?.type === "required" && <p>El mail es requerido</p>}
          {errors.email?.type === "pattern" && (
            <p>El formato del email es incorrecto</p>
          )}
        </ContainerInput>
        <ContainerInput>
          <Input
            placeholder="   Password"
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              maxLength: 15,
            })}
          />
          {errors.password?.type === "required" && (
            <p>La contraseña es requerida</p>
          )}
          {errors.password?.type === "minLength" && (
            <p>La contraseña es muy corta</p>
          )}
          {errors.password?.type === "maxLength" && (
            <p>La contraseña es muy larga</p>
          )}
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
  gap: 1.5rem;
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
  padding: 15px 0px 15px 0px;
  border-radius: 5px;
  border: none;
  width: 100%;
`;

const BoxFlex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
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

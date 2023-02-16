import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const { password, username } = data;
    const values = {
      password,
      username,
    };

    reset();
  };

  return (
    <Container>
      <Title>Create Account</Title>
      <FormAccount onSubmit={handleSubmit(onSubmit)}>
        <StyleName>
          <div style={{ width: "100%" }}>
            <Input
              placeholder="   Username"
              type="text"
              {...register("username", {
                required: true,
                maxLength: 15,
              })}
            />
            {errors.username?.type === "required" && (
              <p>The field is required</p>
            )}
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
              <p>The field is required</p>
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
          {errors.email?.type === "required" && <p>The field is required</p>}
          {errors.email?.type === "pattern" && (
            <p>The email format is incorrect</p>
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
          {errors.password?.type === "required" && <p>The field is required</p>}
          {errors.password?.type === "minLength" && (
            <p>The password is too short</p>
          )}
          {errors.password?.type === "maxLength" && (
            <p>The password is too long</p>
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

export default Form;

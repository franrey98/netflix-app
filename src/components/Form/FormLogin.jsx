import { useForm } from "react-hook-form";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  background-color: black;
  padding: 2rem 1rem 2rem 1rem;
  border-radius: 5px;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 2rem 5rem 7rem 5rem;
  }
`;

const Title = styled.h3`
  color: white;
  font-size: 28px;
  font-weight: 700;
`;

const FormAccount = styled.form``;

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
  width: 100%;
`;

const Button = styled.button`
  border-radius: 5px;
  width: 100%;
  padding: 15px;
  font-weight: 700;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #c85a14;
  cursor: pointer;
  border: none;
`;

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Container>
      <Title>Log In</Title>
      <FormAccount onSubmit={handleSubmit(onSubmit)}>
        <ContainerInput>
          <Input
            placeholder="    Email"
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
            placeholder="    Password"
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
          <Button type="submit">Log In</Button>
        </BoxFlex>
      </FormAccount>
    </Container>
  );
};

export default FormLogin;

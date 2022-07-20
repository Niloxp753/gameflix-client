import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerService, useRegister } from "services/authService";
import swal from "sweetalert";
import * as S from "./style";

const Register = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
    cpf: "",
  });

  let navigate = useNavigate();

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: useRegister) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmitRegister = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await registerService.registerValues(values);
    const jwt = response.data.token;

    if (jwt) {
      localStorage.setItem("jwtLocalStorage", jwt);
      swal({
        title: "Seja bem vindo",
        icon: "success",
        timer: 3000,
      });
      navigate("/");
    }
    console.log(response.data);
  };

  return (
    <S.Register>
      <S.RegisterContent>
        <S.RegisterHeaderForm />
        <S.RegisterBodyForm>
          <S.RegisterContentFormInput onSubmit={handleSubmitRegister}>
            <S.RegisterTitleH1>Crie a sua conta!</S.RegisterTitleH1>
            <S.RegisterTitleH2>Preencha seus dados:</S.RegisterTitleH2>
            <S.RegisterNameInput
              placeholder="       Nome"
              type="text"
              name="name"
              id="name"
              onChange={handleChangeValues}
              required
            ></S.RegisterNameInput>
            <S.RegisterEmailInput
              placeholder="       Email"
              type="text"
              name="email"
              id="email"
              onChange={handleChangeValues}
              required
            ></S.RegisterEmailInput>
            <S.RegisterImageInput
              placeholder="       Url da imagem"
              type="text"
              name="image"
              id="image"
              onChange={handleChangeValues}
              required
            ></S.RegisterImageInput>
            <S.RegisterCpfInput
              placeholder="       CPF"
              type="text"
              name="cpf"
              id="cpf"
              onChange={handleChangeValues}
              required
            ></S.RegisterCpfInput>
            <S.RegisterPasswordInput
              placeholder="       Senha"
              type="password"
              name="password"
              id="password"
              onChange={handleChangeValues}
              required
            ></S.RegisterPasswordInput>
            <S.RegisterConfirmPasswordInput
              placeholder="       Confirmar Senha"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={handleChangeValues}
              required
            ></S.RegisterConfirmPasswordInput>
              <S.RegisterBtnDetails type="submit">Cadastrar</S.RegisterBtnDetails>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <S.RegisterBtnReturn></S.RegisterBtnReturn>
            </Link>
          </S.RegisterContentFormInput>
        </S.RegisterBodyForm>
      </S.RegisterContent>
    </S.Register>
  );
};

export default Register;

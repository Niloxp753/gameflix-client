import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginService, userLoginObj } from "services/authService";
import swal from "sweetalert";
import * as S from "./style";

const Login = (props: any) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: userLoginObj) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const loginUser = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await loginService.login(values);
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
    <S.Login>
      <S.LoginContent>
        <S.LoginHeaderForm>
          <S.LoginDetailsLogo />
        </S.LoginHeaderForm>
        <S.LoginBodyForm onSubmit={loginUser}>
          <S.LoginContentFormInput>
            <S.LoginTitleH1>Bem vindo(a) de volta!</S.LoginTitleH1>
            <S.LoginTitleH2>Acesse sua conta agora mesmo:</S.LoginTitleH2>
            <S.LoginEmailInput
              placeholder="       Email"
              type="email"
              name="email"
              id="email"
              onChange={handleChangeValues}
            />
            <S.LoginPasswordInput
              placeholder="       Senha"
              type="password"
              name="password"
              id="password"
              onChange={handleChangeValues}
            />
            <Link to={"/profile"} style={{ textDecoration: "none" }}>
              <S.LoginBtnDetails>Entrar</S.LoginBtnDetails>
            </Link>
            <Link to={"/"} style={{ textDecoration: "none" }}>
              <S.LoginBtnReturn></S.LoginBtnReturn>
            </Link>
          </S.LoginContentFormInput>
        </S.LoginBodyForm>
      </S.LoginContent>
    </S.Login>
  );
};

export default Login;

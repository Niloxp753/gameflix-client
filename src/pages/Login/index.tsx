import { Link } from "react-router-dom";
import * as S from "./style";

const Login = () => {
  return (
    <S.Login>
      <S.LoginContent>
        <S.LoginHeaderForm />
        <S.LoginBodyForm>
          <S.LoginContentFormInput>
            <S.LoginTitleH1>Bem vindo(a) de volta!</S.LoginTitleH1>
            <S.LoginTitleH2>Acesse sua conta agora mesmo:</S.LoginTitleH2>
            <S.LoginEmailInput placeholder="       Email" type={"text"}></S.LoginEmailInput>
            <S.LoginPasswordInput placeholder="       Senha" type={"password"}></S.LoginPasswordInput>
            <S.LoginBtnDetails>Entrar</S.LoginBtnDetails>
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

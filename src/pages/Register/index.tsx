import { Link } from "react-router-dom";
import * as S from "./style";

const Register = () => {
  return (
    <S.Register>
      <S.RegisterContent>
        <S.RegisterHeaderForm />
        <S.RegisterBodyForm>
          <S.RegisterContentFormInput>
            <S.RegisterTitleH1>Crie a sua conta!</S.RegisterTitleH1>
            <S.RegisterTitleH2>Preencha seus dados:</S.RegisterTitleH2>
            <S.RegisterNameInput
              placeholder="       Nome"
              type={"text"}
            ></S.RegisterNameInput>
            <S.RegisterEmailInput
              placeholder="       Email"
              type={"text"}
            ></S.RegisterEmailInput>
            <S.RegisterImageLabel>
              Imagem <S.RegisterImageInput placeholder="Imagem" type={"file"}></S.RegisterImageInput>
            </S.RegisterImageLabel>
            <S.RegisterCpfInput
              placeholder="       CPF"
              type={"number"}
            ></S.RegisterCpfInput>
            <S.RegisterPasswordInput
              placeholder="       Senha"
              type={"password"}
            ></S.RegisterPasswordInput>
            <S.RegisterConfirmPasswordInput
              placeholder="       Confirmar Senha"
              type={"password"}
            ></S.RegisterConfirmPasswordInput>
            <S.RegisterBtnDetails>Cadastrar</S.RegisterBtnDetails>
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

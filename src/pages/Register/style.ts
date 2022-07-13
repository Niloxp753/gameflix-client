import styled, { css } from "styled-components";
import { colors } from "assets/styles/colors";
import { mixins } from "assets/styles/mixins";
import bgPadrao from "assets/imgs/bg-padrao.jpg";
import iconEmail from "assets/icons/email-input.png";
import iconPassword from "assets/icons/password-input.png";
import iconName from "assets/icons/name-input.png";
import iconImage from "assets/icons/image-input.png";
import iconCpf from "assets/icons/cpf-input.png";
import logoForm from "assets/imgs/logo-form.png";

export const Register = styled.section`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.7) url(${bgPadrao});
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: darken;
    min-width: 100%;
    min-height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  `}
`;

export const RegisterContent = styled.main`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% - 150px);
    padding: 20px;
    overflow: auto;
    height: 100vh;
    box-sizing: border-box;
  `}
`;

export const RegisterDetailsLogo = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.logoStyle};
    margin: 0;
  `}
`;
export const RegisterHeaderForm = styled.header`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 608px;
    height: 350px;
    border-radius: 16px 16px 0px 0px;
    background-image: url(${logoForm});
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${colors.baseFormCad};
  `}
`;

export const RegisterBodyForm = styled.form`
  ${() => css`
    ${mixins.registerForm}
  `}
`;

export const RegisterBtnDetails = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    ${theme.mixins.inputBtnLogin()};
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
  `}
`;

export const RegisterContentFormInput = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    ${theme.mixins.cadastroContentForm()};
  `}
`;

export const RegisterTitleH1 = styled.h1`
  ${({ theme }) => css`
    margin: 0;
    font-size: x-large;
    font-weight: 700;
    ${theme.mixins.loginContentTextForm()};
  `}
`;

export const RegisterTitleH2 = styled.h2`
  ${({ theme }) => css`
    margin: 0;
    font-weight: 500;
    font-size: medium;
    ${theme.mixins.loginContentTextForm()};
  `}
`;

export const RegisterNameInput = styled.input`
  ${({ theme }) => css`
    ${theme.mixins.inputCadastro()};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: large;
    padding: 14px;
    outline-style: none;
    ::placeholder {
      background-image: url(${iconName});
      background-repeat: no-repeat;
      background-position: 0px -1px;
      background-size: contain;
      font-size: large;
      font-weight: 400;
      font-family: Arial, Helvetica, sans-serif;
    }
  `}
`;

export const RegisterEmailInput = styled.input`
  ${({ theme }) => css`
    ${theme.mixins.inputCadastro()};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: large;
    padding: 14px;
    outline-style: none;
    ::placeholder {
      background-image: url(${iconEmail});
      background-repeat: no-repeat;
      background-position: 0px -1px;
      background-size: contain;
      font-size: large;
      font-weight: 400;
      font-family: Arial, Helvetica, sans-serif;
    }
  `}
`;
export const RegisterImageLabel = styled.label`
  ${({ theme }) => css`
    ${theme.mixins.inputCadastro()};
    color: ${colors.textNeutral};
    display: flex;
    justify-content: ;
    align-items: center;
    padding-left: 50px;
    outline-style: none;
    background-image: url(${iconImage});
    background-repeat: no-repeat;
    background-position: 10px center;
    background-size: 7%;
    font-size: large;
    font-weight: 400;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
  `}
`;

export const RegisterImageInput = styled.input`
  ${() => css`
    display: none;
  `}
`;

export const RegisterCpfInput = styled.input`
  ${({ theme }) => css`
    ${theme.mixins.inputCadastro()};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: large;
    padding: 14px;
    outline-style: none;
    ::placeholder {
      background-image: url(${iconCpf});
      background-repeat: no-repeat;
      background-position: 0px 0px;
      background-size: contain;
      font-size: large;
      font-weight: 400;
      font-family: Arial, Helvetica, sans-serif;
    }
  `}
`;

export const RegisterPasswordInput = styled.input`
  ${({ theme }) => css`
    ${theme.mixins.inputCadastro()};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: large;
    padding: 14px;
    outline-style: none;
    ::placeholder {
      background-image: url(${iconPassword});
      background-repeat: no-repeat;
      background-position: 0px 0px;
      background-size: contain;
      font-size: large;
      font-weight: 400;
      font-family: Arial, Helvetica, sans-serif;
    }
  `}
`;

export const RegisterConfirmPasswordInput = styled.input`
  ${({ theme }) => css`
    ${theme.mixins.inputCadastro()};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: large;
    padding: 14px;
    outline-style: none;
    ::placeholder {
      background-image: url(${iconPassword});
      background-repeat: no-repeat;
      background-position: 0px 0px;
      background-size: contain;
      font-size: large;
      font-weight: 400;
      font-family: Arial, Helvetica, sans-serif;
    }
  `}
`;

export const RegisterBtnReturn = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.returnBtn()};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px;
    outline-style: none;
    cursor: pointer;
  `};
`;

import styled, { css } from "styled-components";
import bgPadrao from "assets/imgs/bg-padrao.jpg";
import logoForm from "assets/imgs/logo-form.png";
import { colors } from "assets/styles/colors";
import { mixins } from "assets/styles/mixins";
import iconEmail from "assets/icons/email-input.png";
import iconPassword from "assets/icons/password-input.png";

export const Login = styled.section`
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

export const LoginContent = styled.main`
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

export const LoginDetailsLogo = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.logoStyle};
    margin: 0;
  `}
`;
export const LoginHeaderForm = styled.header`
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
    background-color: ${colors.secondaryColor};
  `}
`;

export const LoginBodyForm = styled.form`
  ${() => css`
    ${mixins.loginForm}
  `}
`;

export const LoginDetailsForm = styled.input`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    ${theme.mixins.inputHome()};
    font-size: large;
    padding: 14px;
    outline-style: none;
    ::placeholder {
      background-image: url();
      background-repeat: no-repeat;
      background-position: 0px -2px;
      font-size: large;
      font-weight: 500;
      font-family: Arial, Helvetica, sans-serif;
    }
  `}
`;

export const LoginBtnDetails = styled.button`
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

export const LoginContentFormInput = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    ${theme.mixins.loginContentForm()};
  `}
`;

export const LoginTitleH1 = styled.h1`
  ${({ theme }) => css`
    margin: 0;
    font-size: x-large;
    font-weight: 700;
    ${theme.mixins.loginContentTextForm()};
  `}
`;

export const LoginTitleH2 = styled.h2`
  ${({ theme }) => css`
    margin: 0;
    font-weight: 500;
    font-size: medium;
    ${theme.mixins.loginContentTextForm()};
  `}
`;

export const LoginEmailInput = styled.input`
  ${({ theme }) => css`
    ${theme.mixins.input()};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: larger;
    padding: 14px;
    outline-style: none;
    ::placeholder {
      background-image: url(${iconEmail});
      background-repeat: no-repeat;
      background-position: 0px 0px;
      font-size: larger;
      font-weight: 400;
      font-family: Arial, Helvetica, sans-serif;
    }
  `}
`;

export const LoginPasswordInput = styled.input`
  ${({ theme }) => css`
    ${theme.mixins.input()};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: larger;
    padding: 14px;
    outline-style: none;
    ::placeholder {
      background-image: url(${iconPassword});
      background-repeat: no-repeat;
      background-position: 0px 0px;
      font-size: larger;
      font-weight: 400;
      font-family: Arial, Helvetica, sans-serif;
    }
  `}
`;

export const LoginBtnReturn = styled.div`
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

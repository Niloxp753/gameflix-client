import styled, { css } from "styled-components";
import bgHome from "assets/imgs/bg-home.jpg";
import iconEmail from "assets/icons/email-input.png";

export const Home = styled.section`
  ${({ theme }) => css`
    background-image: url(${bgHome});
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 100vw;
    min-height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: center;
  `}
`;

export const HomeContent = styled.main`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% - 450px);
    padding: 20px;
    overflow: auto;
    height: 100vh;
    box-sizing: border-box;
  `}
`;

export const HomeHeaderDetails = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
  `}
`;

export const HomeHeaderDetailsLogo = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.logoStyle};
    margin: 0;
  `}
`;

export const HomeDivDetailsRegister = styled.div`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const HomeDetailsRegister = styled.input`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    ${theme.mixins.inputHome()};
    font-size: large;
    padding: 14px;
    outline-style: none;
    ::placeholder {
      background-image: url(${iconEmail});
      background-repeat: no-repeat;
      background-position: 0px -2px;
      font-size: large;
      font-weight: 500;
      font-family: Arial, Helvetica, sans-serif;
    }
  `}
`;

export const HomeBtnDetailsRegister = styled.button`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    ${theme.mixins.inputBtnHome()};
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
  `}
`;

import styled, { css } from "styled-components";
import bgHome from "assets/imgs/bg-home.jpg";
import iconEmail from "assets/icons/email-input.png";

export const Home = styled.section`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.7) url(${bgHome});
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

export const HomeHeader = styled.header`
  ${() => css`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  `}
`;

export const HomeContent = styled.main`
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

export const HomeHeaderDetails = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 30px;
  `}
`;

export const HomeHeaderDetailsLogo = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.logoStyle};
    margin: 0;
  `}
`;

export const HomeDivDetailsRegister = styled.form`
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
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    ${theme.mixins.inputBtnHome()};
    padding-top: 0;
    padding-bottom: 0;
    padding-right: 0;
  `}
`;

export const HomeTitleH1 = styled.h1`
	${({ theme }) => css`
    margin: 0;
		${theme.mixins.titleHomeH1()};
	`}
`;

export const HomeTitleH2 = styled.h2`
	${({ theme }) => css`
    margin: 0;
		${theme.mixins.titleHomeH2()};
	`}
`;

export const HomeTitleH3 = styled.h3`
	${({ theme }) => css`
    margin: 0;
		${theme.mixins.titleHomeH3()};
	`}
`;


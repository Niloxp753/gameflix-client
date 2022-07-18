import styled, { css } from "styled-components";
import bgPadrao from "assets/imgs/bg-padrao.jpg";
import { colors } from "assets/styles/colors";
import { mixins } from "assets/styles/mixins";

export const Profile = styled.section`
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

export const ProfileContent = styled.main`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% - 118px);
    padding: 10px;
    overflow: auto;
    height: 100vh;
    box-sizing: border-box;
  `}
`;

export const ProfileDetailsLogo = styled.h1`
  ${({ theme }) => css`
    ${theme.mixins.logoStyle};
    margin: 0;
  `}
`;

export const ProfileHeaderContent = styled.header`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 850px;
    height: 400px;
    border-radius: 16px 16px 0px 0px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: ${colors.secondaryColor};
  `}
`;

export const ProfileBodyContent = styled.div`
  ${() => css`
    ${mixins.profileBodyContent}
  `}
`;

export const ProfileCardContent = styled.div`
  ${() => css`
    ${mixins.profileCardBodyContent}
  `}
`;

export const ProfileIcons = styled.div`
  ${() => css`
    ${mixins.profileCardItem}
  `}
`;

export const ProfileBtnReturn = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.returnBtn()};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px;
    outline-style: none;
    margin: 10px;
    cursor: pointer;
  `};
`;

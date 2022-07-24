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

export const ProfileBodyDivContentCards = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    flex-wrap: wrap;
    width: 840px;
    gap: 20px;
  `}
`;

export const ProfileDivCardContent = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    flex-wrap: nowrap;
    width: 165px;
    height: 185px;
  `}
`;


export const ProfileCardContent = styled.img`
  ${() => css`
    ${mixins.profileCardBodyContent}
  `}
`;

export const ProfileTitle = styled.text`
  ${() => css`
    font-size: 1.2rem;
    color: #ffffff;
  `}
`;

export const ProfileCardCEdit = styled.i`
  ${() => css`
    font-size: 2rem;
    color: #000000;
  `}
`;

export const ProfileCardContentCreate = styled.div`
  ${() => css`
    ${mixins.profileCardBodyContentCreate}
  `}
`;

export const ProfileIcons = styled.div`
  ${() => css`
    ${mixins.profileCardCreate}
  `}
`;

export const ProfileDivContentBtn = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    padding-right: 20px;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
  `}
`;

export const ProfileBtnLogout = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.logoutBtn()};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 18px;
    outline-style: none;
    margin: 10px;
    cursor: pointer;
  `};
`;

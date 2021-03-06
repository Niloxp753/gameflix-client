import { mixins } from "assets/styles/mixins";
import styled, { css } from "styled-components";

export const Container = styled.section`
  ${() => css`
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: hidden;
  `}
`;

export const BgImageGame = styled.div`
  ${() => css`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
  `}
`;

export const HeaderGame = styled.header`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    height: 10vh;
    width: 100%;
  `}
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.logoStyle};
    margin: 0;
  `}
`;

export const MainGame = styled.main`
  ${() => css`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
  `}
`;

export const DivColumn1Game = styled.div`
  ${() => css`
    width: 97%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  `}
`;

export const DivProfileDetailsGame = styled.div`
  ${() => css`
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 20px;
    padding-right: 20px;
  `}
`;

export const ProfileDetailsGame = styled.div`
  ${() => css`
    background-color: #252525b0;
    width: 240px;
    height: auto;
    border-radius: 0px 10px 10px 0px;
    display: flex;
    justify-content: initial;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    padding: 7px;
    color: #ffffff;
  `}
`;

export const DivAdminEditGame = styled.div`
  ${() => css`
    background-color: #252525b0;
    width: 160px;
    height: auto;
    border-radius: 10px 0px 0px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 7px;
    color: #ffffff;
  `}
`;

export const AdminEditGame = styled.i`
  ${() => css`
    
    :hover{
      filter: invert();
    }
    cursor: pointer;
  `}
`;

export const ProfileIconGame = styled.img`
  ${() => css`
    ${mixins.HomepageProfileImage}
    cursor: pointer;
  `}
`;

export const ProfileContainerGame = styled.div`
  ${() => css`
    height: auto;
    width: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: sans-serif;
    font-style: bold;
    gap: 10px;
  `}
`;

export const DivColumn2Game = styled.div`
  ${() => css`
    width: 100%;
    height: 40vh;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    gap: 20px;
  `}
`;

export const DivTrailerGame = styled.iframe`
  ${() => css`
    height: 250px;
    border-radius: 14px;
  `}
`;

export const DivGameplayGame = styled.iframe`
  ${() => css`
    height: 250px;
    border-radius: 14px;
  `}
`;

export const DivColumn3Game = styled.div`
  ${() => css`
    width: 100%;
    max-height: 40vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 20px;
  `}
`;

export const DescriptionDetailsGame = styled.text`
  ${() => css`
    background-color: #252525b0;
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    color: #ffffff;
    font-size: large;
    font-weight: 500;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-stretch: condensed;
    padding: 10px;
  `}
`;

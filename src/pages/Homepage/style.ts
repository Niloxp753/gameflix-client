import bgHomepage from "assets/imgs/bg-homepage.webp";
import { colors } from "assets/styles/colors";
import { mixins } from "assets/styles/mixins";
import styled, { css } from "styled-components";

export const Homepage = styled.section`
  ${({ theme }) => css`
    background-image: url(${bgHomepage});
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    overflow-y: hidden;
  `}
`;

export const HomepageHeader = styled.header`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    height: 10vh;
    width: 100%;
  `}
`;

export const HomepageLogo = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.logoStyle};
    margin: 0;
  `}
`;

export const HomepageMainDetails = styled.main`
  ${() => css`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  `}
`;

export const HomepageDivColumn1 = styled.div`
  ${() => css`
    min-width: 20%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 20px;
  `}
`;

export const HomepageProfileDetails = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColorOpacity};
    width: 100%;
    height: 100px;
    border-radius: 0px 10px 10px 0px;
    display: flex;
    justify-content: initial;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    padding-left: 10px;
    color: #ffffff;
  `}
`;

export const HomepageProfileIcon = styled.img`
  ${() => css`
    ${mixins.HomepageProfileImage}
    cursor: pointer;
  `}
`;

export const HomepageDivColumn2 = styled.div`
  ${() => css`
    width: 40%;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: start;
    align-self: start;
    padding-top: 10px;
    gap: 20px;
  `}
`;

export const HomepageInputSearch = styled.input`
  ${({ theme }) => css`
    ${theme.mixins.inputHomepageSearch}
    height: 60px;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
  `}
`;

export const HomepageDivTextGames = styled.div`
  ${() => css`
    width: 40%;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 15px;
    flex-wrap: nowrap;
  `}
`;

export const HomepageGamesAll = styled.div`
  ${() => css`
    color: ${colors.baseInput};
    height: 20px;
    width: 110px;
    display: flex;
    flex-direction: row;
    align-items: center;
  `}
`;

export const HomepageGamesFavorite = styled.div`
  ${() => css`
    color: ${colors.baseInput};
    height: 20px;
    width: 110px;
    display: flex;
    flex-direction: row;
    align-items: center;
  `}
`;

export const HomepageDivColumn3 = styled.div`
  ${() => css`
    width: 20%;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
  `}
`;

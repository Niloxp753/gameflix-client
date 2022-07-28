import bgHomepage from "assets/imgs/bg-homepage.webp";
import { colors } from "assets/styles/colors";
import { mixins } from "assets/styles/mixins";
import styled, { css } from "styled-components";
import inputSearch from "assets/icons/search-input.png";

export const Homepage = styled.section`
  ${() => css`
    background-image: url(${bgHomepage});
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
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
    padding-left: 10px;
  `}
`;

export const HomepageProfileDetails = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColorOpacity};
    width: 100%;
    height: auto;
    border-radius: 0px 10px 10px 0px;
    display: flex;
    justify-content: initial;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    padding: 10px;
    color: #ffffff;
  `}
`;

export const HomepageProfileIcon = styled.img`
  ${() => css`
    ${mixins.HomepageProfileImage}
    cursor: pointer;
  `}
`;

export const HomepageProfileContainer = styled.div`
  ${() => css`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: sans-serif;
    font-style: bold;
    gap: 10px;
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
    height: 50px;
    border-radius: 5px;
    padding: 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: large;
    outline-style: none;
    ::placeholder {
      background-image: url(${inputSearch});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: 0px 0px;
      font-size: large;
      font-weight: 500;
      font-family: Arial, Helvetica, sans-serif;
    }
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
    min-width: 20%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 10px;
  `}
`;

export const HomepageAdminDetails = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColorOpacity};
    width: auto;
    height: auto;
    border-radius: 10px 0px 0px 10px;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    flex-direction: row;
    padding: 10px;
    color: #ffffff;
    gap: 20px;
  `}
`;

export const HomepageAdminIconGame = styled.i`
  ${() => css`
    :hover {
      filter: invert();
      transition: ease-in-out 0.3s;
    }
    cursor: pointer;
  `}
`;

export const HomepageAdminIconProfile = styled.i`
  ${() => css`
    :hover {
      filter: invert();
      transition: ease-in-out 0.3s;
    }
    cursor: pointer;
  `}
`;

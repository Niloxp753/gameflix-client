import styled, { css } from "styled-components";
import score from "assets/icons/score.png";
import favorite from "assets/icons/heart-favorite.png";

export const CardGamesContent = styled.section`
  ${() => css`
    height: 60vh;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  `}
`;

export const CardGamesDivContent = styled.div`
  ${() => css`
    height: auto;
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    
  `}
`;

export const HeartStyle = styled.i`
  ${() => css`
    position: absolute;
    z-index: 0;
    top: -9px;
    left: -5px;
    width: 25px;
    background: #ffffff;
    border-radius: 50%;
    height: 25px;
    display: flex;
    transform: rotate(336deg);
    color: #6930c3;
    font-size: 1.2rem;
    align-items: center;
    justify-content: center;
    cursor: pointer; 
  `}
`;

export const CardGamesImgBg = styled.img`
  ${() => css`
    height: 220px;
    width: 195px;
    border-radius: 15px;
    cursor: pointer;
  `}
`;

export const CardGamesDivDetailsScore = styled.div`
  ${() => css`
    height: 550px;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 10px;
  `}
`;

export const CardGamesDetailsScore = styled.image`
  ${() => css`
    background-image: url(${score});
    background-repeat: no-repeat;
    height: 30px;
    width: 5%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 0px 10px 20px;
  `}
`;

export const CardGamesDivDetailsFavorite = styled.div`
  ${() => css`
    background-repeat: no-repeat;
    height: 110px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `}
`;

export const CardGamesDetailsFavorite = styled.div`
  ${() => css`
    background-image: url(${favorite});
    background-repeat: no-repeat;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

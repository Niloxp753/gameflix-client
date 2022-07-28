import styled, { css } from "styled-components";
import bgPadrao from "assets/imgs/bg-padrao.jpg";

export const Container = styled.section`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.7) url(${bgPadrao});
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: darken;
    width: 100vw;
    height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    align-content: center;
    overflow-x: hidden;
  `}
`;

export const HeaderGenreGame = styled.header`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 20px;
    height: 10vh;
    width: 100vw;
  `}
`;

export const Logo = styled.div`
  ${({ theme }) => css`
    ${theme.mixins.logoStyle};
    margin: 0;
  `}
`;

export const MainGenreGame = styled.main`
  ${() => css`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
  `}
`;

export const MainDivGenre = styled.div`
  ${() => css`
    width: 40%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  `}
`;

export const MainDivGame = styled.div`
  ${() => css`
    width: 40%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const ModalCreateGenre = styled.div`
  ${() => css`
    background: #63cccc;
    width: 450px;
    height: 250px;
    display: flex;
    border-radius: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const ModalHeaderCreateGenre = styled.div`
  ${() => css`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}
`;

export const ModalTextCreateGenre = styled.h1`
  ${() => css`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}
`;

export const ModalFormCreateGenre = styled.form`
  ${() => css`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  `}
`;

export const ModalDivInputCreateGenre = styled.input`
  ${() => css`
    width: 200px;
    height: 45px;
    display: flex;
    font-size: large;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    outline-style: none;
    border-radius: 5px;
  `}
`;

export const ModalDivBtnCreateGenre = styled.div`
  ${() => css`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}
`;

export const ModalBtnCreateGenre = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.quaternaryColor};
    color: ${theme.colors.textColor};
    width: 120px;
    height: 45px;
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid ${theme.colors.borderBtn};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `}
`;

export const ModalEditGenre = styled.div`
  ${() => css`
    background: #63cccc;
    width: 450px;
    height: 250px;
    display: flex;
    border-radius: 16px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  `}
`;

export const ModalHeaderEditGenre = styled.div`
  ${() => css`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;

export const ModalTextEditGenre = styled.h1`
  ${() => css`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}
`;

export const ModalFormEditGenre = styled.form`
  ${() => css`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  `}
`;

export const ModalDivInputEditGenre = styled.input`
  ${() => css`
    width: 200px;
    height: 45px;
    display: flex;
    font-size: large;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    outline-style: none;
    border-radius: 5px;
  `}
`;

export const ModalDivBtnEditGenre = styled.div`
  ${() => css`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}
`;

export const ModalBtnEditGenre = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.quaternaryColor};
    color: ${theme.colors.textColor};
    width: 120px;
    height: 45px;
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid ${theme.colors.borderBtn};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `}
`;

export const ModalCreateGame = styled.div`
  ${() => css`
    background: #63cccc;
    width: 500px;
    height: 90vh;
    display: flex;
    border-radius: 16px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`;

export const ModalHeaderCreateGame = styled.div`
  ${() => css`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
  `}
`;

export const ModalTextCreateGame = styled.h1`
  ${() => css`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}
`;

export const ModalFormCreateGame = styled.form`
  ${() => css`
    width: 300px;
    height: 500px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  `}
`;

export const InputTitle = styled.input`
  width: 300px;
  height: 35px;
  font-size: medium;
  :focus {
    box-shadow: none;
    outline: none;
    border-radius: 5px;
  }
`;

export const InputImage = styled.input`
  width: 300px;
  font-size: medium;
  height: 35px;
  :focus {
    box-shadow: none;
    outline: none;
    border-radius: 5px;

  }
`;

export const InputYear = styled.input`
  width: 300px;
  font-size: medium;
  height: 35px;
  :focus {
    box-shadow: none;
    outline: none;
    border-radius: 5px;

  }
`;

export const InputScore = styled.input`
  width: 300px;
  font-size: medium;
  height: 35px;
  :focus {
    box-shadow: none;
    outline: none;
    border-radius: 5px;

  }
`;

export const InputTrailer = styled.input`
  font-size: medium;
  width: 300px;
  height: 35px;
  :focus {
    box-shadow: none;
    outline: none;
    border-radius: 5px;

  }
`;

export const InputGameplay = styled.input`
  font-size: medium;
  width: 300px;
  height: 35px;
  :focus {
    box-shadow: none;
    outline: none;
    border-radius: 5px;

  }
`;

export const InputDescription = styled.input`
  display: flex;
  justify-content: flex-start;
  width: 300px;
  font-size: medium;
  height: 60px;
  :focus {
    box-shadow: none;
    outline: none;
    border-radius: 5px;

  }
`;

export const InputGenre = styled.input`
  width: 300px;
  font-size: medium;
  height: 35px;
  :focus {
    box-shadow: none;
    outline: none;
  }
`;

export const ModalDivBtnCreateGame = styled.div`
  ${() => css`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}
`;

export const ModalBtnCreateGame = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.quaternaryColor};
    color: ${theme.colors.textColor};
    width: 120px;
    height: 45px;
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid ${theme.colors.borderBtn};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `}
`;

export const BtnReturn = styled.div`
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

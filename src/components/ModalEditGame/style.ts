import { colors } from "assets/styles/colors";
import styled from "styled-components";

export const Container = styled.section`
  background: #63CCCC;
  border-radius: 16px;
  width: 40vw;
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  gap: 10px;
  padding: 5px;
`;

export const DivTextEditGame = styled.div`
  width: 350px;
  height: 20px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: x-large;
`;

export const TextEditGame = styled.text`
  color: ${colors.baseInput};
  font-family: "Poppins";
  line-height: 50px;
  text-align: center;
`;

export const FormModal = styled.form`
  width: 300px;
  height: 580px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const InputTitle = styled.input`
  width: 300px;
  height: 40px;
  :focus{
    box-shadow: none;
    outline: none;
  }
`;

export const InputImage = styled.input`
  width: 300px;
  height: 40px;
  :focus{
    box-shadow: none;
    outline: none;
  }
`;

export const InputYear = styled.input`
  width: 300px;
  height: 40px;
  :focus{
    box-shadow: none;
    outline: none;
  }
`;

export const InputScore = styled.input`
  width: 300px;
  height: 40px;
  :focus{
    box-shadow: none;
    outline: none;
  }
`;

export const InputTrailer = styled.input`
  width: 300px;
  height: 40px;
  :focus{
    box-shadow: none;
    outline: none;
  }
`;

export const InputGameplay = styled.input`
  width: 300px;
  height: 40px;
  :focus{
    box-shadow: none;
    outline: none;
  }
`;

export const InputDescription = styled.input`
  width: 300px;
  height: 60px;
  :focus{
    box-shadow: none;
    outline: none;
  }
`;

export const InputGenre = styled.input`
  width: 300px;
  height: 40px;
  :focus{
    box-shadow: none;
    outline: none;
  }
`;

export const BtnModal = styled.button`
  width: 190px;
  height: 50px;
  background: #6930c3;
  border: 2px solid #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
  font-size: large;
  cursor: pointer;
`;


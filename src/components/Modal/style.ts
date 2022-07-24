import { colors } from "assets/styles/colors";
import styled from "styled-components";

export const Container = styled.section`
  background: #63CCCC;
  border-radius: 16px;
  width: 500px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  gap: 10px;
`;

export const DivTextProfile = styled.div`
  width: 350px;
  height: 40px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  font-size: x-large;
`;

export const TextProfile = styled.text`
  color: ${colors.baseInput};
  font-family: "Poppins";
  line-height: 50px;
  padding-top: 40px;
  text-align: center;
`;

export const FormModal = styled.form`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const InputImage = styled.input`
  width: 300px;
  height: 40px;
  :focus{
    box-shadow: none;
    outline: none;
  }
`;

export const InputName = styled.input`
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

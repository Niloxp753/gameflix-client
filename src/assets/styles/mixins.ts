import { css } from "styled-components";
import { colors } from "assets/styles/colors";
import { constants } from "assets/styles/constants";
import down from "assets/icons/down-input.png";
import Logo from "assets/imgs/logo.png";
import btnReturn from "assets/icons/return.png";
import profileCreate from "assets/icons/profile-create.png";
import btnLogout from "assets/icons/logout.png";

const logoStyle = () => css`
  background-image: url(${Logo});
  position: ${constants.logoPosition};
  width: ${constants.logoWidth};
  height: ${constants.logoHeight};
`;

const headingStyle = () => css`
  font-family: ${constants.headingFontFamiy};
  font-size: ${constants.headingFontSize};
  line-height: ${constants.headingLineHeight};
`;

const bodyStyle = () => css`
  font-family: ${constants.bodyFontFamily};
  font-size: ${constants.bodyFontSize};
  line-height: ${constants.bodyLineHeight};
`;

const buttonOutlineModifiers = {
  square: () => css`
    width: 65px;
  `,
};

const buttonOutline = (color = colors.borderBtn, square = false) => css`
  height: 65px;
  background: transparent;
  border-radius: 30px;
  padding: 14px;
  cursor: pointer;
  border: 2px solid ${color};
  color: ${color};
  ${square && buttonOutlineModifiers.square()}
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const buttonFilled = (color = colors.secondaryColor) => css`
  background: ${color};
  border: none;
  border-radius: 30px;
  color: ${colors.textDark};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  cursor: pointer;
  ${bodyStyle()};
  font-weight: 600;
  box-shadow: 0px 8px 24px 0px ${colors.shadowColor};
`;

const buttonIconModifiers = {
  active: () => css`
    box-shadow: 0px 8px 24px 0px ${colors.shadowColor};
  `,
};

const buttonIcon = (active = false) => css`
  height: 56px;
  width: 56px;
  border-radius: 8px;
  padding: 16px;
  border: none;
  cursor: pointer;
  background-color: ${active ? colors.secondaryColor : "transparent"};
  color: ${active ? colors.textColor : colors.quaternaryColor};
  ${active && buttonIconModifiers.active()}
`;

const input = () => css`
  height: 60px;
  border-radius: 5px;
  width: 320px;
  background: ${colors.baseInput};
  border: 1px solid ${colors.baseLine};
  box-sizing: border-box;
`;

const inputHome = () => css`
  height: 60px !important;
  min-width: 550px;
  border-radius: 5px 0px 0px 5px;
  background: ${colors.baseInput};
  border: 1px solid ${colors.baseLine};
  box-sizing: border-box;
`;

const inputHomepageSearch = () => css`
  height: 45px !important;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: ${colors.baseInput};
  border: 1px solid ${colors.baseLine};
  box-sizing: border-box;
`;

const inputBtnHome = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  font-style: uppercase;
  text-transform: uppercase;
  color: ${colors.baseInput};
  text-align: center;
  width: 190px;
  height: 60px;
  border-radius: 5px;
  background: ${colors.quaternaryColor};
  border: 1px solid ${colors.baseLine};
  box-sizing: border-box;
  cursor: pointer;
`;

const inputBtnLogin = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: large;
  font-style: uppercase;
  text-transform: uppercase;
  color: ${colors.textDark};
  text-align: center;
  width: 190px;
  height: 60px;
  border-radius: 5px;
  background: ${colors.secondaryColor};
  border: 1px solid ${colors.baseLine};
  box-sizing: border-box;
  cursor: pointer;
`;

const inputCadastro = () => css`
  height: 48px;
  border-radius: 5px;
  width: 410px;
  background: ${colors.baseInput};
  border: 1px solid ${colors.baseLine};
  box-sizing: border-box;
`;

const select = (important = true) => css`
  ${input()};
  ${bodyStyle()};
  appearance: none;
  background: ${important ? colors.secondaryColor : "transparent"};
  border: ${important ? "none" : "1px solid " + colors.baseLine};
  color: ${colors.textColor};
  background-image: url(${down});
  background-repeat: no-repeat;
  padding-right: 50px;
  background-position: 85%;
`;

const titleHomeH1 = () => css`
  height: 120px;
  width: 837px;
  margin: 0;
  text-align: center;
  font-weight: 700;
  font-family: ${constants.bodyFontFamily};
  font-size: 50px;
  color: ${colors.baseInput};
`;

const titleHomeH2 = () => css`
  height: 80px;
  width: 820px;
  margin: 0;
  text-align: center;
  font-weight: 500;
  font-family: ${constants.bodyFontFamily};
  font-size: 40px;
  color: ${colors.baseInput};
`;

const titleHomeH3 = () => css`
  height: 40px;
  width: 830px;
  text-align: center;
  font-weight: 400;
  font-family: ${constants.bodyFontFamily};
  font-size: 20px;
  color: ${colors.baseInput};
`;

const loginForm = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 608px;
  height: 801px;
  border-radius: 0px 0px 16px 16px;
  background-color: ${colors.baseFormLogin};
`;

const loginContentTextForm = () => css`
  color: ${colors.textColor};
  font-family: ${constants.headingFontFamiy};
`;
const loginContentForm = () => css`
  display: flex;
  flex-direction: column;
  width: 290px;
  height: 450px;
  gap: 25px;
`;

const profileBodyContent = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: nowrap;
  min-width: 850px;
  height: 800px;
  border-radius: 0px 0px 16px 16px;
  background-color: ${colors.baseFormLogin};
  gap: 10px;
`;

const profileCardBodyContent = () => css`
  width: 160px;
  height: 160px;
  border-radius: 100%;
  border: 2px solid #000000;
  cursor: pointer;
  :hover{
    border: 2px solid #ffffff;
    transition: ease-in 0.3s;
  }
`;

const HomepageProfileImage = () => css`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  border: 2px solid #ffffff;
  :hover {
    border: 2px solid #000000;
  }
`;

const profileCardBodyContentCreate = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 160px;
  height: 195px;
  border-radius: 100%;
  cursor: pointer;
  :hover {
    filter: invert();
    transition: ease-in 0.3s;
  }
`;

const profileCardCreate = () => css`
  background-image: url(${profileCreate});
  background-size: contain;
  background-repeat: no-repeat;
  width: 160px;
  height: 160px;
`;

const cadastroContentForm = () => css`
  display: flex;
  flex-direction: column;
  width: 425px;
  height: 600px;
  gap: 15px;
`;

const returnBtn = () => css`
  background-image: url(${btnReturn});
  background-repeat: no-repeat;
  background-position: left;
`;

const logoutBtn = () => css`
  background-image: url(${btnLogout});
  background-repeat: no-repeat;
  background-position: left;
`;

const registerForm = () => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 608px;
  height: 801px;
  border-radius: 0px 0px 16px 16px;
  background-color: ${colors.baseFormCad};
`;

export const mixins = {
  bodyStyle,
  buttonFilled,
  buttonIcon,
  buttonOutline,
  headingStyle,
  input,
  inputHome,
  inputBtnHome,
  logoStyle,
  select,
  titleHomeH1,
  titleHomeH2,
  titleHomeH3,
  loginForm,
  loginContentTextForm,
  loginContentForm,
  inputBtnLogin,
  returnBtn,
  logoutBtn,
  registerForm,
  cadastroContentForm,
  inputCadastro,
  profileBodyContent,
  profileCardCreate,
  profileCardBodyContent,
  inputHomepageSearch,
  profileCardBodyContentCreate,
  HomepageProfileImage,
};

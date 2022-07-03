import { css } from "styled-components";
import { colors } from "assets/styles/colors";
import { constants } from "assets/styles/constants";
import down from "assets/icons/down-input.png";

const logoStyle = () => css`
  font-size: ${constants.logoFontSize};
  line-height: ${constants.logoLineHeight};
`;

const headingStyle = () => css`
  font-family: ${constants.headingFontFamiy};
  font-size: ${constants.headingFontSize};
  line-height: ${constants.headingLineHeight};
`;

const bodyStyle = () => css`
  font-family: ${constants.bodyFontFamiy};
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
  height: 55px;
  border-radius: 5px;
  padding: 14px;
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

export const mixins = {
  bodyStyle,
  buttonFilled,
  buttonIcon,
  buttonOutline,
  headingStyle,
  input,
  logoStyle,
  select,
};

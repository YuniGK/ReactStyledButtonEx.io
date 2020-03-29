import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
/*
yarn add polished - 라이브러리 설치 후 
import해준다.

polished 라이브러리 기능
*/

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];

    return css`
      background: ${color};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
      ${props =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 1px solid ${selected};
          &:hover {
            background: ${selected};
            color: #fff;
          }
        `}
    `;
  }}
`;

const fullWidthStyle = css`
  ${props =>
    props.fullwidth &&
    css`
      width: 100%;
      justify-content: center;
      & + & {
        margin: 1rem 0 0;
      }
    `}
`;

const sizes = {
  large: {
    height: "3rem",
    fontSize: "1.25rem"
  },
  medium: {
    height: "2.25rem",
    fontSize: "1rem"
  },
  small: {
    height: "1.75rem",
    fontSize: "0.875rem"
  }
};

const sizeStyles = css`
    /*
    ${props =>
      props.size === "large" &&
      css`
        height: 3rem;
        font-size: 1.25rem;
      `}

    ${props =>
      props.size === "medium" &&
      css`
        height: 2.25rem;
        font-size: 1rem;
      `}

    ${props =>
      props.size === "small" &&
      css`
        height: 1.75rem;
        font-size: 0.875rem;
      `}
      */
     ${({ size }) => css`
      height: ${sizes[size].height};
      font-szie: ${sizes[size].fontSize};
    `}
`;

const StyledButton = styled.button`
  /* 공통 스타일 */
  display: inline-flex;
  outline: none;
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 0 1rem;

  /* 크기 */
  /*
  height: 2rem;
  font-size: 1rem;
  
  ${props =>
  props.size === "large" &&
  css`
    height: 3rem;
    font-size: 1.25rem;
  `}

  ${props =>
    props.size === "medium" &&
    css`
      height: 2.25rem;
      font-size: 1rem;
    `}

  ${props =>
    props.size === "small" &&
    css`
      height: 1.75rem;
      font-size: 0.875rem;
    `} 
  */
  /* 색상 */
  /*
  background: #228be6;
  ↓
  background: ${props => props.theme.palette.blue}; 
 

  &:hover {    
    background: ${lighten(0.1, "#228be6")};
    ↓
    background: ${props => lighten(0.1, props.theme.palette.blue)};    
  }
  &:active {
    background: ${darken(0.1, "#228be6")};
    ↓
    background: ${props => darken(0.1, props.theme.palette.blue)};
  }

  ${props => {
    const color = props.theme.palette.blue;
    ↓
    const color = props.theme.palette[props.color];

    return css`
      background: ${color};
      &:hover {
        background: ${lighten(0.1, color)};
      }
      &:active {
        background: ${darken(0.1, color)};
      }
    `;
  }}
  ↓
  ${({ theme, color }) => {
    const selected = theme.palette[color];

    return css`
      background: ${color};
      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
  */

 /* 기타 */
 & + & {
    margin-left: 1rem;
  }
  /* 색상 */
  ${colorStyles}

  /* 크기 */
  ${sizeStyles}

  ${fullWidthStyle}
  
`;

function Button({ children, color, size, outline, fullwidth, ...rest }) {
  return (
    <StyledButton
      color={color}
      size={size}
      outline={outline}
      fullwidth={fullwidth}
      {...rest}
    >
      {children}
    </StyledButton>
  );
}
Button.defaultProps = {
  color: "blue",
  size: "medium"
};

export default Button;

import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

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

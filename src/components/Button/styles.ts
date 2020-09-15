/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  backgroundColor: string;
  borderColor?: string;
}

interface TextProps {
  textColor: string;
}

export const Container = styled.button<ButtonProps>`
  background: ${props => props.backgroundColor};
  height: 48px;
  border-radius: 10px;
  padding: 0 16px;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  ${props =>
    props.borderColor &&
    css`
      border-style: solid;
      border-width: 1px;
      border-color: #c53030;
    `}

  &:hover {
    background: ${props => shade(0.15, props.backgroundColor)};
  }
`;

export const Text = styled.text<TextProps>`
  color: ${props => props.textColor};
`;

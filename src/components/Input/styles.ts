/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f9f9f9;
  border: 2px solid #ed5565;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  align-items: center;
  display: flex;

  & + div {
    margin-top: 8px;
  }

  color: #ed5565;

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #ffc170;
      border-color: #ffc170;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #fff;
    `}


  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #fff;

    &::placeholder {
      color: #ed5565;
    }

    & + input {
      margin-top: 8px;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      background-color: #c53030;
    }
  }
`;

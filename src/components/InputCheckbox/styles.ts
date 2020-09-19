/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

export const Container = styled.div`
  padding-left: 2%;
  width: 100%;
  background-color: blue;

  & + div {
    margin-top: 8px;
  }

  color: #ed5565;

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #fff;

    & + input {
      margin-top: 8px;
    }
  }
`;

export const Text = styled.text`
  color: #434a54;
`;

/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ffa836;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #312e38;
  width: 100%;
  font-weight: 500;
  margin-top: 16px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.05, '#ffa836')};
  }
`;

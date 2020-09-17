/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  /*flex: 1;
  flex-direction: row;
  justify-content: space-between;
   align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  margin-top: 16px;
  border-bottom: 2px solid #ccd1d9; */
  background-color: black;
`;

export const LeftSideContainer = styled.div`
  background-color: yellow;
  align-self: flex-start;
  flex-direction: row;
  /* height: 48px;
  width: 100%;
  margin-top: 16px;
  border-bottom: 2px solid #ccd1d9; */
`;

export const Text = styled.text`
  color: #434a54;
`;

export const CurrentPart = styled.text`
  color: #4a89dc;
  align-self: flex-end;
`;

/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  width: 100%;
  margin-top: 16px;
  border-bottom: 2px solid #ccd1d9;
`;

export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  /* height: 48px;
  width: 100%;
  margin-top: 16px;
  border-bottom: 2px solid #ccd1d9; */
`;

export const Text = styled.text`
  color: #434a54;
  padding-left: 10%;
  align-self: center;
`;

export const CurrentPart = styled.text`
  color: #4a89dc;
  align-self: center;
`;

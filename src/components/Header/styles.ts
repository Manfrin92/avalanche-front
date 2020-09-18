/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  width: 100%;
  border-bottom: 2px solid #ccd1d9;
`;

export const LeftSideContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
`;

export const Title = styled.text`
  color: #434a54;
  padding-left: 10%;
  align-self: center;
`;

export const TitlePart = styled.text`
  color: #434a54;
  font-weight: 600;
  padding-left: 2%;
  align-self: center;
`;

export const CurrentPart = styled.text`
  color: #4a89dc;
  align-self: center;
`;

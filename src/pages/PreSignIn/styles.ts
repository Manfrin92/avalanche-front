import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const ButtonContainer = styled.div`
  margin-top: 15%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  > a {
    color: #ff9000;
    display: block;
    margin-top: 8px;

    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 40px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #ed5565;
      display: block;
      margin-top: 24px;

      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#ED5565')};
      }
    }
  }
`;

export const Title = styled.text`
  font-weight: normal;
  font-size: 32px;
`;

export const Bold = styled.text`
  font-weight: bold;
  font-size: 32px;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;

import styled from 'styled-components';

import signUpBackgroundImg from '../../assets/sign-in-background.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const CheckBoxContainer = styled.div`
  color: #434a54;
  font-weight: 400px;
  font-size: 22px;
  line-height: 18.96px;
  padding-left: 2%;

  input + label {
    padding-left: 2%;
  }

  input:checked {
    background-color: red;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: 10px;
  align-items: center;
  margin-bottom: 32px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Content = styled.div`
  /* margin-top: -5%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpBackgroundImg}) no-repeat center;
  background-size: cover;
`;

export const ThirdPartTitle = styled.text`
  font-weight: 400;
  font-size: 22px;
  line-height: 18.96px;
  color: #434a54;
`;

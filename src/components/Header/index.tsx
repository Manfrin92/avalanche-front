/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import logoImg from '../../assets/loginregister.svg';

import {
  Container,
  Title,
  TitlePart,
  CurrentPart,
  LeftSideContainer,
} from './styles';

interface HeaderProps {
  title?: string;
  formPart: string;
}

const Header: React.FC<HeaderProps> = ({ formPart, title }) => {
  return (
    <Container>
      <LeftSideContainer>
        <img src={logoImg} alt="Avalanche logo" width="32" height="28" />
        <>
          <Title> Cadastro </Title>
          <TitlePart> {title} </TitlePart>
        </>
      </LeftSideContainer>

      <CurrentPart>
        {formPart}
        /3
      </CurrentPart>
    </Container>
  );
};

export default Header;

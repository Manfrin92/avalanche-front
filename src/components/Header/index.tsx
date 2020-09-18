import React from 'react';

import logoImg from '../../assets/loginregister.svg';

import { Container, Text, CurrentPart, LeftSideContainer } from './styles';

interface HeaderProps {
  formPart: string;
}

const Header: React.FC<HeaderProps> = ({ formPart }) => {
  return (
    <Container>
      <LeftSideContainer>
        <img src={logoImg} alt="Avalanche logo" width="32" height="28" />
        <Text>Cadastro</Text>
      </LeftSideContainer>

      <CurrentPart>
        {formPart}
        /3
      </CurrentPart>
    </Container>
  );
};

export default Header;

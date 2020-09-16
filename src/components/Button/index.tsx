import React, { ButtonHTMLAttributes } from 'react';

import { Container, Text } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor: string;
  text: string;
  textColor: string;
  borderColor?: string;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  backgroundColor,
  textColor,
  borderColor,
  ...rest
}) => {
  return (
    <Container
      type="button"
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      {...rest}
    >
      <Text textColor={textColor}>{text}</Text>
    </Container>
  );
};

export default Button;

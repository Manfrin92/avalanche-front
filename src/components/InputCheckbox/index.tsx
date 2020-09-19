import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Text } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const InputCheckbox: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  return (
    <Container>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
      <label htmlFor="vehicle1"> I have a bike</label>
    </Container>
  );
};

export default InputCheckbox;

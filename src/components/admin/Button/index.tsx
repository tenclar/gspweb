import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type InputProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: string;
};
const Button: React.FC<InputProps> = ({ children, color, ...rest }) => (
  <Container type="button" color={color} {...rest}>
    {children}
  </Container>
);

export default Button;

import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiLock, FiMail } from 'react-icons/fi';
import Input from '../../components/admin/Input';
import Button from '../../components/admin/Button';

import { AnimationContainer } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const handleSubmit = useCallback(() => {
    console.log('submit');
  }, []);
  return (
    <AnimationContainer>
      <h1>GSP Admin</h1>
      <Form onSubmit={handleSubmit}>
        <h1>Faça seu logon</h1>
        <Input icon={FiMail} name="email" placeholder="E-mail" />
        <Input
          icon={FiLock}
          name="password"
          placeholder="senha"
          type="password"
        />
        <Button type="submit"> Entrar</Button>
        <Link to="/forgot-password">Esquci minha senha</Link>
      </Form>
    </AnimationContainer>
  );
};

export default SignIn;

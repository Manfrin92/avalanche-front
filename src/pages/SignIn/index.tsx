import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import getValidationErros from '../../utils/getValidationErros';

import logoImg from '../../assets/loginregister.svg';

import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, Bold, Content, AnimationContainer } from './styles';

interface DataProps {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: DataProps): Promise<void> => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatóio')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (e) {
        if (e instanceof Yup.ValidationError) {
          const errors = getValidationErros(e);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="Avalanche logo" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Title>
              Avalanche
              <br /> de
              <Bold> Amor </Bold>
            </Title>

            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button
              backgroundColor="#ED5565"
              text="ENTRAR"
              textColor="#FFF"
              type="submit"
            />

            <Button
              backgroundColor="#FFF"
              text="CADASTRAR"
              textColor="#ED5565"
              type="submit"
              borderColor="black"
            />

            <a href="ff">Esqueci minha senha</a>
          </Form>
          <FiLogIn />
          Criar conta
        </AnimationContainer>
      </Content>
      {/* <Background /> */}
    </Container>
  );
};

export default SignIn;

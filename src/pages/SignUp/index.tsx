import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import getValidationErros from '../../utils/getValidationErros';

// import logoImg from '../../assets/logo.svg';
import { useToast } from '../../context/ToastContext';

import Input from '../../components/Input';
import Button from '../../components/Button';
import api from '../../services/api';

import { Container, Content, AnimationContainer } from './styles';

interface DataProps {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: DataProps): Promise<void> => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatóio')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'Senha com no mínimo 6 valores'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado com sucesso',
          description: 'Você já pode fazer seu logon',
        });
      } catch (e) {
        if (e instanceof Yup.ValidationError) {
          const errors = getValidationErros(e);
          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer seu cadastro',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      {/* <Background /> */}
      <Content>
        <AnimationContainer>
          {/* <img src={logoImg} alt="Gobarber logo" /> */}

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadasto</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para login
          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;

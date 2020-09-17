import React, { useCallback, useRef } from 'react';
import {
  FiMail,
  FiLock,
  FiUser,
  FiArrowLeft,
  FiCreditCard,
} from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/all';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import getValidationErros from '../../utils/getValidationErros';

import logoImg from '../../assets/avalanche.svg';
import { useToast } from '../../context/ToastContext';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';
import api from '../../services/api';

import {
  Container,
  Content,
  AnimationContainer,
  Background,
  ButtonContainer,
  HeaderContainer,
} from './styles';

interface DataProps {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  // const history = useHistory();

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

        console.log('cadastro: ', data);

        // await api.post('/users', data);

        // history.push('/');

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
    [addToast],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          {/* <HeaderContainer> */}
          <Header formPart="1" />
          {/* </HeaderContainer> */}
          <Form ref={formRef} onSubmit={handleSubmit}>
            {/* Primeira parte */}
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="cpf" icon={FiCreditCard} placeholder="CPF" />
            <Input
              name="phone"
              icon={AiOutlineWhatsApp}
              placeholder="Telefone"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <ButtonContainer>
              <Button
                textColor="#DA4453"
                text="VOLTAR"
                backgroundColor="#f9f9f9"
                type="submit"
                borderColor="#DA4453"
                width="34"
              />
              <Button
                textColor="#f9f9f9"
                text="PRÓXIMO"
                backgroundColor="#DA4453"
                type="submit"
                borderColor="#DA4453"
                width="65"
              />
            </ButtonContainer>
          </Form>

          {/* Segunda parte */}

          {/* <Input name="cep" icon={FiUser} placeholder="CEP" />
            <Input name="street" icon={FiMail} placeholder="RUA" />
            <Input
              name="streetNumber"
              icon={FiCreditCard}
              placeholder="NÚMERO"
            />
            <Input
              name="streetComplement"
              icon={AiOutlineWhatsApp}
              placeholder="COMPLEMENTO"
            />
            <Input
              name="bairro"
              icon={FiLock}
              type="password"
              placeholder="BAIRRO"
            />
            <Input
              name="city"
              icon={FiLock}
              type="password"
              placeholder="CIDADE"
            />
            <Input
              name="state"
              icon={FiLock}
              type="password"
              placeholder="ESTADO"
            /> */}

          {/* Terceira Parte - TUDO OPCIONAL, E CLICÁVEL */}

          {/* <Link to="/"> */}

          {/* </Link> */}
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;

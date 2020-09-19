/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
import React, { useCallback, useRef, useState } from 'react';
import { FiMail, FiLock, FiUser, FiCreditCard } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/all';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
// import { Link, useHistory } from 'react-router-dom';
import getValidationErros from '../../utils/getValidationErros';

// import logoImg from '../../assets/avalanche.svg';
import { useToast } from '../../context/ToastContext';

import Input from '../../components/Input';
import InputCheckbox from '../../components/InputCheckbox';
import Button from '../../components/Button';
import Header from '../../components/Header';
// import api from '../../services/api';

import {
  Container,
  Content,
  AnimationContainer,
  Background,
  ButtonContainer,
  CheckBoxContainer,
  ThirdPartTitle,
} from './styles';

interface DataProps {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const firstPartRef = useRef<FormHandles>(null);
  const secondPartRef = useRef<FormHandles>(null);
  const thirdPartRef = useRef<FormHandles>(null);

  const [formStage, setFormStage] = useState('3');
  const { addToast } = useToast();
  // const history = useHistory();

  const handleSubmitFirstPart = useCallback(
    async (data: DataProps): Promise<void> => {
      try {
        firstPartRef.current?.setErrors({});

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
          firstPartRef.current?.setErrors(errors);

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

  const handleSubmitSecondPart = useCallback(
    async (data: DataProps): Promise<void> => {
      try {
        secondPartRef.current?.setErrors({});

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
          secondPartRef.current?.setErrors(errors);

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

  const handleSubmitThirdPart = useCallback(
    async (data: DataProps): Promise<void> => {
      try {
        thirdPartRef.current?.setErrors({});

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
          thirdPartRef.current?.setErrors(errors);

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
          <Header
            title={formStage === '2' ? 'Endereço' : 'Habilidades'}
            formPart={formStage}
          />

          {formStage === '1' ? (
            <Form ref={firstPartRef} onSubmit={handleSubmitFirstPart}>
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
            </Form>
          ) : formStage === '2' ? (
            <Form ref={secondPartRef} onSubmit={handleSubmitSecondPart}>
              <Input name="cep" placeholder="CEP" />
              <Input name="street" placeholder="RUA" />
              <Input name="streetNumber" placeholder="NÚMERO" />
              <Input name="streetComplement" placeholder="COMPLEMENTO" />
              <Input name="bairro" placeholder="BAIRRO" />
              <Input name="city" placeholder="CIDADE" />
              <Input name="state" placeholder="ESTADO" />

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
          ) : (
            <Form ref={thirdPartRef} onSubmit={handleSubmitThirdPart}>
              <ThirdPartTitle>Posso ajudar sendo</ThirdPartTitle>

              <CheckBoxContainer>
                <input type="checkbox" id="cook" name="cook" value="cook" />
                <label htmlFor="cook"> Cozinheiro (a)</label>
                <br />
                <input
                  type="checkbox"
                  id="driver"
                  name="driver"
                  value="driver"
                />
                <label htmlFor="driver"> Motorista</label>
                <br />
                <input
                  type="checkbox"
                  id="doctor"
                  name="doctor"
                  value="doctor"
                />
                <label htmlFor="doctor"> Médico (a)</label>
                <br />
                <input type="checkbox" id="nurse" name="nurse" value="nurse" />
                <label htmlFor="nurse"> Enfermeiro (a)</label>
                <br />
                <input
                  type="checkbox"
                  id="generalServices"
                  name="generalServices"
                  value="generalServices"
                />
                <label htmlFor="generalServices"> Serviços gerais</label>
                <br />
                <input
                  type="checkbox"
                  id="hospitalAccompanying
"
                  name="hospitalAccompanying
"
                  value="hospitalAccompanying"
                />
                <label
                  htmlFor="hospitalAccompanying
"
                >
                  Acompanhante hospitalar
                </label>
                <br />
                <input
                  type="checkbox"
                  id="financialHelper"
                  name="financialHelper"
                  value="financialHelper"
                />
                <label htmlFor="financialHelper"> Ajudante Financeiro</label>
                <br />
                <input
                  type="checkbox"
                  id="interceptor"
                  name="interceptor"
                  value="interceptor"
                />
                <label htmlFor="interceptor"> Intercessor</label>
                <br />
                <input
                  type="checkbox"
                  id="civilManualWorker"
                  name="civilManualWorker"
                  value="civilManualWorker"
                />
                <label htmlFor="civilManualWorker"> Pedreiro</label>
                <br />
                <input
                  type="checkbox"
                  id="carpinter"
                  name="carpinter"
                  value="carpinter"
                />
                <label htmlFor="carpinter"> Carpinteiro</label>
                <br />
              </CheckBoxContainer>
              <Input name="otherHabilities" placeholder="OUTROS" />
            </Form>
          )}

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
              text={formStage === '3' ? 'CADASTRAR' : 'VOLTAR'}
              backgroundColor="#DA4453"
              type="submit"
              borderColor="#DA4453"
              width="65"
            />
          </ButtonContainer>

          {/* <Link to="/"> */}

          {/* </Link> */}
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;

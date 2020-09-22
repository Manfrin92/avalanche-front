/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FiMail, FiLock, FiUser, FiCreditCard } from 'react-icons/fi';
import { AiOutlineWhatsApp, GiConsoleController } from 'react-icons/all';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
// import { Link, useHistory } from 'react-router-dom';
import Axios from 'axios';
import getValidationErros from '../../utils/getValidationErros';
import { states } from '../../utils/Type';

// import logoImg from '../../assets/avalanche.svg';

import Input from '../../components/Input';
import InputMask from '../../components/Input/InputMask';
import Select from '../../components/Select';
import Button from '../../components/Button';
import Header from '../../components/Header';
// import api from '../../services/api';
import {
  SignUpData as SignUpUser,
  FirstPartFormData,
  SecondPartFormData,
  ThirdPartFormData,
} from '../../utils/interfaces';

import {
  Container,
  Content,
  Background,
  ButtonContainer,
  CheckBoxContainer,
  ThirdPartTitle,
} from './styles';

const SignUp: React.FC = () => {
  const firstPartRef = useRef<FormHandles>(null);
  const secondPartRef = useRef<FormHandles>(null);
  const thirdPartRef = useRef<FormHandles>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formStage, setFormStage] = useState('1');
  const [habilities, setHabilities] = useState([]);

  const [user, setUser] = useState({} as SignUpUser);

  // const history = useHistory();

  const checkEmailAndCpf = useCallback(async (email: string, cpf: string) => {
    try {
      const { logradouro, bairro, localidade, uf } = await Axios.get(
        'http://www.viacep.com.br/ws/81320000/json/',
      );

      console.log('logradouro: ', logradouro);
    } catch (e) {
      toast.error('Houve um erro ao buscar CPF e E-mail digitados!');
    }
  }, []);

  const handleSubmitFirstPart = useCallback(
    async (data: FirstPartFormData): Promise<void> => {
      try {
        firstPartRef.current?.setErrors({});

        // const schema = Yup.object().shape({
        //   name: Yup.string().required('Nome obrigatório'),
        //   email: Yup.string()
        //     .required('E-mail obrigatóio')
        //     .email('Digite um e-mail válido'),
        //   cpf: Yup.string().required('CPF obrigatório'),
        //   phone: Yup.string().min(8, 'Telefone obrigatório'),
        //   password: Yup.string().min(6, 'Senha com no mínimo 6 valores'),
        // });

        // await schema.validate(data, {
        //   abortEarly: false,
        // });

        setUser({
          ...user,
          name: data.name,
          email: data.email,
          cpf: data.cpf,
          phone: data.phone,
          password: data.password,
        });

        console.log({
          ...user,
          name: data.name,
          email: data.email,
          cpf: data.cpf,
          phone: data.phone,
          password: data.password,
        });
        setFormStage('2');
        setFormTitle('Endereço');
      } catch (e) {
        if (e instanceof Yup.ValidationError) {
          const errors = getValidationErros(e);
          firstPartRef.current?.setErrors(errors);
        }
      }
    },
    [user],
  );

  const handleSubmitSecondPart = useCallback(
    async (data: SecondPartFormData): Promise<void> => {
      try {
        secondPartRef.current?.setErrors({});

        // const schema = Yup.object().shape({
        //   cep: Yup.string().required('CEP obrigatório'),
        //   addressStreet: Yup.string().required('Rua obrigatóia'),
        //   addressArea: Yup.string().required('Bairro obrigatório'),
        //   city: Yup.string().required('Cidade obrigatória'),
        //   state: Yup.string().required('Estado obrigatório'),
        // });

        // await schema.validate(data, {
        //   abortEarly: false,
        // });

        setUser(prevState => ({
          ...prevState,
          cep: data.cep,
          addressStreet: data.addressStreet,
          addressArea: data.addressArea,
          city: data.city,
          state: data.state,
        }));

        console.log({
          ...user,
          cep: data.cep,
          addressStreet: data.addressStreet,
          addressArea: data.addressArea,
          city: data.city,
          state: data.state,
        });
        setFormStage('3');
        setFormTitle('Habilidades');
      } catch (e) {
        if (e instanceof Yup.ValidationError) {
          const errors = getValidationErros(e);
          secondPartRef.current?.setErrors(errors);
        }
      }
    },
    [user],
  );

  const handleSubmitThirdPart = useCallback(
    async (data: ThirdPartFormData): Promise<void> => {
      try {
        setUser(prevState => ({
          ...prevState,
          otherHabilities: data.otherHabilities,
        }));

        console.log('Dados que serão enviados para o cadastro: ', user);

        // await api.post('/users', user);

        // history.push('/');
        console.log('cadastrar');
      } catch (e) {
        toast.error('Erro ao efetuar cadastro');
      }
    },
    [user],
  );

  const getCep = useCallback(async () => {
    let cep = secondPartRef.current?.getFieldValue('cep');
    cep = cep.replace(/[^\d]/g, '');
    if (cep === '' || cep.length < 8) {
      toast.error('Digite um cep valido.');
    } else {
      try {
        const response = await Axios.get(
          `https://viacep.com.br/ws/${cep}/json/`,
        );

        if (response.data.erro === true) {
          toast.error('CEP não encontrado');
        } else {
          const { logradouro, bairro, localidade, uf } = response.data;

          secondPartRef.current?.setFieldValue(
            'addressStreet',
            `${logradouro}`,
          );
          secondPartRef.current?.setFieldValue('addressArea', `${bairro}`);
          secondPartRef.current?.setFieldValue('city', `${localidade}`);
          secondPartRef.current?.setFieldValue('state', {
            value: uf,
            label: uf,
          });
        }
      } catch (err) {
        console.log('Erro ao consultar CEP no validador', err);
        toast.error('Erro ao consultar CEP no validador');
      }
    }
  }, []);

  const handleKeyPress = useCallback(event => {
    if (event.key === 'Enter') {
      getCep();
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <Header title={formTitle} formPart={formStage} />

        {formStage === '1' && (
          <Form ref={firstPartRef} onSubmit={handleSubmitFirstPart}>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <InputMask mask="999.999.999-99" name="cpf" placeholder="CPF" />
            <InputMask
              mask="(99)99999-9999"
              name="phone"
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
                type="button"
                borderColor="#DA4453"
                width="33"
                onClick={() => {
                  console.log('Voltar para inicio');
                }}
              />
              <Button
                textColor="#f9f9f9"
                text="PRÓXIMO"
                backgroundColor="#DA4453"
                type="button"
                borderColor="#DA4453"
                width="64"
                onClick={() => {
                  firstPartRef.current?.submitForm();
                }}
              />
            </ButtonContainer>
          </Form>
        )}

        {formStage === '2' && (
          <Form ref={secondPartRef} onSubmit={handleSubmitSecondPart}>
            <InputMask
              mask="99999-999"
              name="cep"
              placeholder="CEP"
              cepIcon
              getCep={getCep}
              onKeyPress={handleKeyPress}
            />
            <Input name="addressStreet" placeholder="RUA" />
            <Input name="streetNumber" placeholder="NÚMERO" />
            <Input name="streetComplement" placeholder="COMPLEMENTO" />
            <Input name="addressArea" placeholder="BAIRRO" />
            <Input name="city" placeholder="CIDADE" />
            <Select
              fieldValue="id"
              fieldLabel="label"
              name="state"
              label="ESTADO"
              placeholder="Selecione uma opção"
              options={states}
              className="react-select-container"
              isClearable
            />

            <ButtonContainer>
              <Button
                textColor="#DA4453"
                text="VOLTAR"
                backgroundColor="#f9f9f9"
                type="button"
                borderColor="#DA4453"
                width="33"
                onClick={() => {
                  setFormStage('1');
                }}
              />
              <Button
                textColor="#f9f9f9"
                text="PRÓXIMO"
                backgroundColor="#DA4453"
                type="button"
                borderColor="#DA4453"
                width="64"
                onClick={() => {
                  secondPartRef.current?.submitForm();
                }}
              />
            </ButtonContainer>
          </Form>
        )}

        {formStage === '3' && (
          <Form ref={thirdPartRef} onSubmit={handleSubmitThirdPart}>
            <ThirdPartTitle>Posso ajudar sendo</ThirdPartTitle>

            <CheckBoxContainer>
              <input type="checkbox" id="cook" name="cook" value="cook" />
              <label htmlFor="cook"> Cozinheiro (a)</label>
              <br />
              <input type="checkbox" id="driver" name="driver" value="driver" />
              <label htmlFor="driver"> Motorista</label>
              <br />
              <input type="checkbox" id="doctor" name="doctor" value="doctor" />
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

            <ButtonContainer>
              <Button
                textColor="#DA4453"
                text="VOLTAR"
                backgroundColor="#f9f9f9"
                type="button"
                borderColor="#DA4453"
                width="33"
                onClick={() => {
                  setFormStage('2');
                }}
              />
              <Button
                textColor="#f9f9f9"
                text="CADASTRAR"
                backgroundColor="#DA4453"
                type="button"
                borderColor="#DA4453"
                width="64"
                onClick={() => {
                  thirdPartRef.current?.submitForm();
                }}
              />
            </ButtonContainer>
          </Form>
        )}

        {/* <Link to="/"> */}

        {/* </Link> */}
      </Content>
    </Container>
  );
};

export default SignUp;

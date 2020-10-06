import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import * as Yup from 'yup';
import {
  Container,
  FormContainer,
  SignUpSubtitle,
  SignUpTitle,
  StepName,
  TitleContainer,
} from './styles';

import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import Button from '../../components/Button';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

interface SignUpFormData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { navigate } = useNavigation();

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        const { name, surname, email, password } = data;
        const parsedName = name + ' ' + surname;

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', {
          name: parsedName,
          email,
          password,
        });

        navigate('SignUpSuccess');
      } catch (err) {
        Alert.alert('Erro no cadastro. Tente novamente!');
      }
    },
    [navigate],
  );

  return (
    <>
      <PageHeader title="Cadastro" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}>
          <Container>
            <FormContainer>
              <TitleContainer>
                <SignUpTitle>Crie sua conta gratuíta</SignUpTitle>
                <SignUpSubtitle>
                  Basta preencher esses dados e você estará conosco.
                </SignUpSubtitle>
              </TitleContainer>

              <Form ref={formRef} onSubmit={handleSignUp}>
                <StepName>01. Quem é você?</StepName>
                <Input
                  name="name"
                  icon="user"
                  placeholder="Nome"
                  returnKeyType="next"
                />
                <Input
                  name="surname"
                  icon="user-plus"
                  placeholder="Sobrenome"
                />

                <StepName>02. Email e Senha</StepName>
                <Input name="email" icon="mail" placeholder="E-mail" />
                <Input name="password" icon="lock" placeholder="Senha" />
                <Button
                  onPress={() => {
                    formRef.current?.submitForm();
                  }}>
                  Cadastrar
                </Button>
              </Form>
            </FormContainer>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;

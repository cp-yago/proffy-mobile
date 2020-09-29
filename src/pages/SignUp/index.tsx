import {
  Container,
  FormContainer,
  SignUpSubtitle,
  SignUpTitle,
  StepName,
  TitleContainer,
} from './styles';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import React, {useCallback, useRef} from 'react';

import Button from '../../components/Button';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import api from '../../services/api';
import {useNavigation} from '@react-navigation/native';

interface SignUpFormData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const {navigate} = useNavigation();

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        console.log(data);
        const response = await api.post('/users', data);
        console.log(response.data);
        navigate('SignUpSuccess');
      } catch (err) {}
    },
    [navigate],
  );

  return (
    <>
      <PageHeader title="Cadastro" />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1}}>
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

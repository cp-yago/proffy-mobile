import {
  Container,
  FormContainer,
  SignUpSubtitle,
  SignUpTitle,
  StepName,
  TitleContainer,
} from './styles';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';

import Button from '../../components/Button';
import {Form} from '@unform/mobile';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import React from 'react';

const SignUp: React.FC = () => {
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

              <Form onSubmit={() => {}}>
                <StepName>01. Quem é você?</StepName>
                <Input name="name" icon="user" placeholder="Nome" />
                <Input
                  name="surname"
                  icon="user-plus"
                  placeholder="Sobrenome"
                />

                <StepName>02. Email e Senha</StepName>
                <Input name="email" icon="mail" placeholder="E-mail" />
                <Input name="password" icon="lock" placeholder="Senha" />
                <Button>Cadastrar</Button>
              </Form>
            </FormContainer>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;

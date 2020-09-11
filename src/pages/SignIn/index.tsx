import React, {useRef} from 'react';

import logoImg from '../../assets/images/logo2.png';
import loginBackground from '../../assets/images/give-classes-background.png';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import {CheckBox} from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {TextInput} from 'react-native';

import {
  Container,
  LogoContainer,
  BackgroundImage,
  LogoImage,
  Description,
  FormLoginContainer,
  TitleContainer,
  Title,
  LinkSignUp,
  CheckBoxContainer,
  CheckBoxText,
  ForgotPasswordLink,
} from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);

  return (
    <Container>
      <LogoContainer>
        <BackgroundImage source={loginBackground} resizeMode="contain">
          <LogoImage source={logoImg} resizeMode="contain" />
          <Description>Sua plaforma de estudos online.</Description>
        </BackgroundImage>
      </LogoContainer>

      <FormLoginContainer>
        <TitleContainer>
          <Title>Fazer login</Title>
          <LinkSignUp>Criar uma conta</LinkSignUp>
        </TitleContainer>

        <Form ref={formRef} onSubmit={() => {}}>
          <Input
            name="email"
            icon="mail"
            placeholder="E-mail"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => {}}
          />

          <Input
            ref={passwordInputRef}
            name="password"
            icon="lock"
            placeholder="Senha"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => {}}
          />

          <CheckBoxContainer>
            <CheckBox disabled={true} />
            <CheckBoxText>Lembrar-me</CheckBoxText>
            <ForgotPasswordLink>Esqueci minha senha</ForgotPasswordLink>
          </CheckBoxContainer>

          <Button>Entrar</Button>
        </Form>
      </FormLoginContainer>
    </Container>
  );
};

export default SignIn;

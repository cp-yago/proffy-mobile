import { Alert, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import {
  BackgroundImage,
  CheckBoxContainer,
  CheckBoxText,
  Container,
  Description,
  ForgotPassword,
  ForgotPasswordText,
  FormLoginContainer,
  LogoContainer,
  LogoImage,
  SignUp,
  SignUpText,
  Title,
  TitleContainer,
} from './styles';
import React, { useCallback, useRef, useState } from 'react';

import Button from '../../components/Button';
import CheckBox from '@react-native-community/checkbox';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import { ScrollView } from 'react-native-gesture-handler';
import loginBackground from '../../assets/images/give-classes-background.png';
import logoImg from '../../assets/images/logo2.png';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const { navigate } = useNavigation();
  const { signIn } = useAuth();

  const [toggleCheckBox, setToggleCheckbox] = useState(false);

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        console.log('chegou');

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        console.log(err);
        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque suas credenciais',
        );
      }
    },
    [signIn],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}>
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
                <SignUp onPress={() => navigate('SignUp')}>
                  <SignUpText>Criar uma conta</SignUpText>
                </SignUp>
              </TitleContainer>

              <Form ref={formRef} onSubmit={handleSignIn}>
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
                  secureTextEntry
                  returnKeyType="send"
                  onSubmitEditing={() => {}}
                />

                <CheckBoxContainer>
                  <CheckBox
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckbox(newValue)}
                    tintColors={{ true: '#04D361', false: 'black' }}
                  />
                  <CheckBoxText>Lembrar-me</CheckBoxText>
                  <ForgotPassword onPress={() => navigate('ForgotPassword')}>
                    <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
                  </ForgotPassword>
                </CheckBoxContainer>

                <Button
                  onPress={() => {
                    formRef.current?.submitForm();
                  }}>
                  Entrar
                </Button>
              </Form>
            </FormLoginContainer>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;

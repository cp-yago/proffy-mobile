import { KeyboardAvoidingView, Platform } from 'react-native';
import {
  BackgroundImage,
  Container,
  Description,
  FormLoginContainer,
  GoBackButton,
  GoBackButtonIcon,
  LogoContainer,
  LogoImage,
  Title,
  SubTitle,
  TitleContainer,
} from './styles';
import React, { useRef } from 'react';

import Button from '../../components/Button';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import { ScrollView } from 'react-native-gesture-handler';
import loginBackground from '../../assets/images/give-classes-background.png';
import logoImg from '../../assets/images/logo2.png';
import { useNavigation } from '@react-navigation/native';
import backIcon from '../../assets/images/icons/back.png';

interface SignInFormData {
  email: string;
  password: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { goBack } = useNavigation();

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
              <GoBackButton onPress={goBack}>
                <GoBackButtonIcon source={backIcon} />
              </GoBackButton>
              <TitleContainer>
                <Title>Esqueceu a sua senha?</Title>
                <SubTitle>Não esquenta, vamos dar um jeito nisso.</SubTitle>
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

                <Button
                  onPress={() => {
                    formRef.current?.submitForm();
                  }}>
                  Enviar
                </Button>
              </Form>
            </FormLoginContainer>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default ForgotPassword;

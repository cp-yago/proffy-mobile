import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
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
import React, { useCallback, useRef } from 'react';

import Button from '../../components/Button';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';
import { ScrollView } from 'react-native-gesture-handler';
import loginBackground from '../../assets/images/give-classes-background.png';
import logoImg from '../../assets/images/logo2.png';
import { useNavigation } from '@react-navigation/native';
import backIcon from '../../assets/images/icons/back.png';
import * as Yup from 'yup';
import api from '../../services/api';

interface RecoverPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const handleSendEmail = useCallback(
    async (data: RecoverPasswordFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required(
              'Insira um e-mail para enviarmos o link para resetar sua senha',
            )
            .email('Insira um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/password/recover', data);

        navigation.navigate('RedefinitionSentSuccess');
      } catch (err) {
        Alert.alert(
          'Erro ao enviar e-mail para resetar senha',
          'Ocorreu um erro. Confira o e-mail e tente novamente!',
        );
      }
    },
    [navigation],
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
              <GoBackButton onPress={navigation.goBack}>
                <GoBackButtonIcon source={backIcon} />
              </GoBackButton>
              <TitleContainer>
                <Title>Esqueceu a sua senha?</Title>
                <SubTitle>Não esquenta, vamos dar um jeito nisso.</SubTitle>
              </TitleContainer>

              <Form ref={formRef} onSubmit={handleSendEmail}>
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

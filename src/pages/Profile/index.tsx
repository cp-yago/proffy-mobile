import {
  AvatarContainer,
  Container,
  ImageBackground,
  InputName,
  ProfileContainer,
  SectionDivider,
  SectionTitle,
  Subject,
  UpdateAvatarIcon,
  UserAvatar,
  UserAvatarButton,
  UserName,
} from './styles';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import React, {useRef} from 'react';

import Button from '../../components/Button';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import backgroundImg from '../../assets/images/signup-success-background.png';

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <>
      <PageHeader title="Meu perfil" />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flexGrow: 1}}>
          <Container>
            <AvatarContainer>
              <ImageBackground source={backgroundImg} resizeMode="contain">
                <UserAvatarButton>
                  <UserAvatar
                    source={{
                      uri:
                        'https://avatars3.githubusercontent.com/u/22509891?s=460&u=1928b8f61bd9f9a3877091fe1c3c7c448a97a29f&v=4',
                    }}
                  />
                  <UpdateAvatarIcon name="camera" size={20} />
                </UserAvatarButton>
                <UserName>Yago Cunha de Paula</UserName>
                <Subject>Música</Subject>
              </ImageBackground>
            </AvatarContainer>

            <ProfileContainer>
              <Form ref={formRef} onSubmit={() => {}}>
                <SectionTitle>Seus dados</SectionTitle>
                <SectionDivider />

                <InputName>Nome</InputName>
                <Input name="name" icon="user" />

                <InputName>Sobrenome</InputName>
                <Input name="surname" icon="user-plus" />

                <InputName>E-mail</InputName>
                <Input name="email" icon="mail" />

                <InputName>Whatsapp</InputName>
                <Input name="whatsapp" icon="smartphone" />

                <InputName>Descrição</InputName>
                <Input name="bio" icon="book" />

                <SectionTitle>Sobre a aula</SectionTitle>
                <SectionDivider />

                <InputName>Matéria</InputName>
                <Input name="subject" icon="book-open" />

                <InputName>Custo da sua hora por aula</InputName>
                <Input name="hour-cost" icon="dollar-sign" />

                <SectionTitle>Horários disponíveis</SectionTitle>
                <SectionDivider />

                <InputName>Dia da semana</InputName>
                <Input name="weekday" icon="calendar" />

                <InputName>Das</InputName>
                <Input name="from" icon="clock" />

                <InputName>Até</InputName>
                <Input name="to" icon="clock" />

                <Button
                  onPress={() => {
                    formRef.current?.submitForm();
                  }}>
                  Salvar alterações
                </Button>
              </Form>
            </ProfileContainer>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Profile;

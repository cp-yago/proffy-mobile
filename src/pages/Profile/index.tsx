// Dependencies
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/auth';
import ImagePicker from 'react-native-image-picker';
import * as Yup from 'yup';

// Components
import {
  AvatarContainer,
  Container,
  ImageBackground,
  ProfileContainer,
  SectionDivider,
  SectionTitle,
  UpdateAvatarIcon,
  UserAvatar,
  UserAvatarButton,
  UserName,
  InputName,
} from './styles';
import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

// Assets
import backgroundImg from '../../assets/images/signup-success-background.png';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { updateUser, user } = useAuth();
  const { navigate } = useNavigation();

  useEffect(() => {
    console.log('user', user);
  }, [user]);

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(() =>
    user.avatar_url
      ? user.avatar_url
      : 'https://m2bob-forum.net/wcf/images/avatars/3e/2720-3e546be0b0701e0cb670fa2f4fcb053d4f7e1ba5.jpg',
  );

  const [whatsapp, setWhatsapp] = useState(() =>
    user.whatsapp ? user.whatsapp : '',
  );
  const [bio, setBio] = useState(() => (user.bio ? user.bio : ''));

  const handleUpdateProfile = useCallback(async () => {
    try {
      const data = {
        name,
        email,
        whatsapp,
        bio,
      };

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        whatsapp: Yup.string().required('Whatsapp obrigatório'),
        bio: Yup.string(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.put('/users', data);

      navigate('Landing');

      updateUser(response.data);
    } catch (err) {
      Alert.alert('Erro ao atualizar perfil');
    }
  }, [updateUser, name, email, whatsapp, bio, navigate]);

  const handleUpdateAvatar = useCallback(() => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecione um avatar',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Usar câmera',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
        mediaType: 'photo',
      },
      async (image) => {
        if (image.didCancel) {
          return;
        }

        if (image.error) {
          Alert.alert('Erro ao atualizar avatar');
          return;
        }

        const data = new FormData();

        data.append('avatar', {
          type: image.type,
          name: image.fileName,
          uri: image.uri,
        });

        try {
          const response = await api.patch('/users/avatar', data);

          updateUser(response.data);
          setAvatar(response.data.avatar_url);
        } catch (err) {
          Alert.alert('Erro ao atualizar avatar');
        }
      },
    );
  }, [updateUser]);

  return (
    <>
      <PageHeader title="Meu perfil" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}>
          <Container>
            <AvatarContainer>
              <ImageBackground source={backgroundImg} resizeMode="contain">
                <UserAvatarButton onPress={handleUpdateAvatar}>
                  <UserAvatar
                    source={{
                      uri: avatar,
                    }}
                  />
                  <UpdateAvatarIcon name="camera" size={20} />
                </UserAvatarButton>
                <UserName>{name}</UserName>
              </ImageBackground>
            </AvatarContainer>

            <ProfileContainer>
              <Form ref={formRef} onSubmit={handleUpdateProfile}>
                <SectionTitle>Seus dados</SectionTitle>
                <SectionDivider />

                <InputName>Nome completo</InputName>
                <Input
                  name="name"
                  icon="user"
                  value={name}
                  onChangeText={(text) => setName(text)}
                />

                <InputName>E-mail</InputName>
                <Input
                  name="email"
                  icon="mail"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />

                <InputName>Whatsapp</InputName>
                <Input
                  name="whatsapp"
                  icon="smartphone"
                  placeholder="(XX) XXXXX-XXXX"
                  value={whatsapp}
                  onChangeText={(text) => setWhatsapp(text)}
                />

                <InputName>Descrição</InputName>
                <Input
                  name="bio"
                  icon="book"
                  value={bio}
                  placeholder="Um breve resumo sobre você"
                  onChangeText={(text) => setBio(text)}
                />

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

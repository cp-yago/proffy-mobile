// Dependencies
import React, { useCallback, useRef, useState } from 'react';
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

// Components
import {
  AddNewTimeButton,
  AddNewTimeContainer,
  AddNewTimeIcon,
  AddNewTimeText,
  AvailableTimesContainer,
  AvatarContainer,
  Container,
  DeleteTimeButton,
  DeleteTimeButtonIcon,
  DeleteTimeButtonText,
  DeleteTimeContainer,
  ImageBackground,
  ProfileContainer,
  SectionDivider,
  SectionTitle,
  Subject,
  UpdateAvatarIcon,
  UserAvatar,
  UserAvatarButton,
  UserName,
  InputName,
  ScheduleItem,
} from './styles';
import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';

// Assets
import backgroundImg from '../../assets/images/signup-success-background.png';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

interface ScheduleItem {
  id: number;
  weekDay: number;
  from: string;
  to: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { updateUser, user } = useAuth();
  const { navigate } = useNavigation();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [avatar, setAvatar] = useState(() =>
    user.avatar_url
      ? user.avatar_url
      : 'https://lh3.googleusercontent.com/proxy/KM8FufXYH35HNvM3spbl27-KFUe-ibgMVGLzWHI0xybIqsbHDeEIWg42N6xDv_Q81vuLIOjhhBNYvANF0jmuXx1TpNgcXI3mwHd3h7ZZt45Ovgd2ZhVq4ec',
  );
  const [whatsapp, setWhatsapp] = useState(() =>
    user.whatsapp ? user.whatsapp : '',
  );
  const [bio, setBio] = useState(() => (user.bio ? user.bio : ''));
  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[] | null>(
    null,
  );

  const addNewScheduleItem = useCallback(() => {
    if (scheduleItems) {
      setScheduleItems([
        ...scheduleItems,
        { id: 0, weekDay: 1, from: '', to: '' },
      ]);
    } else {
      setScheduleItems([{ id: 0, weekDay: 1, from: '', to: '' }]);
    }
  }, [scheduleItems]);

  const removeScheduleItem = useCallback(
    (id: number) => {
      if (scheduleItems) {
        const newScheduleItems = scheduleItems.filter(
          (scheduleItem) => scheduleItem.id !== id,
        );

        setScheduleItems(newScheduleItems);
      }
    },
    [scheduleItems],
  );

  const setScheduleItemValue = useCallback(
    (position: number, field: string, value: string) => {
      if (scheduleItems) {
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
          if (index === position) {
            return { ...scheduleItem, [field]: value };
          }
          return scheduleItem;
        });
        setScheduleItems(updateScheduleItems);
      }
    },
    [scheduleItems],
  );

  const handleUpdateProfile = useCallback(async () => {
    try {
      const data = {
        name,
        email,
        whatsapp,
        bio,
      };

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

          console.log(response.data);

          updateUser(response.data);
          console.log(response.data);
          setAvatar(response.data.avatar_url);
        } catch (err) {
          console.log(err);
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
                <Subject>Música</Subject>
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

                <SectionTitle>Sobre a aula</SectionTitle>
                <SectionDivider />

                <InputName>Matéria</InputName>
                <Input
                  name="subject"
                  icon="book-open"
                  value={subject}
                  onChangeText={(text) => setSubject(text)}
                />

                <InputName>Custo da sua hora por aula</InputName>
                <Input
                  name="hour-cost"
                  icon="dollar-sign"
                  value={cost}
                  onChangeText={(text) => setCost(text)}
                />

                <AvailableTimesContainer>
                  <SectionTitle>Horários disponíveis</SectionTitle>
                  <AddNewTimeContainer>
                    <AddNewTimeButton onPress={addNewScheduleItem}>
                      <AddNewTimeIcon name="plus" size={20} />
                      <AddNewTimeText>Novo</AddNewTimeText>
                    </AddNewTimeButton>
                  </AddNewTimeContainer>
                </AvailableTimesContainer>

                <SectionDivider />

                {scheduleItems &&
                  scheduleItems.map((scheduleItem, index) => (
                    <ScheduleItem key={index}>
                      <Select
                        label="Dia da semana"
                        items={[
                          { label: 'Segunda', value: 1 },
                          { label: 'Terça', value: 2 },
                          { label: 'Quarta', value: 3 },
                          { label: 'Quinta', value: 4 },
                          { label: 'Sexta', value: 5 },
                        ]}
                        placeholder="Selecione um dia"
                        defaultValue={
                          scheduleItem.weekDay ? scheduleItem.weekDay : 1
                        }
                        onChangeItem={(item) =>
                          setScheduleItemValue(index, 'weekDay', item.value)
                        }
                      />

                      <Select
                        label="Das"
                        items={[
                          { label: '00h', value: '00:00' },
                          { label: '01h', value: '01:00' },
                          { label: '02h', value: '02:00' },
                          { label: '03h', value: '03:00' },
                          { label: '05h', value: '05:00' },
                          { label: '06h', value: '06:00' },
                          { label: '07h', value: '07:00' },
                          { label: '08h', value: '08:00' },
                          { label: '09h', value: '09:00' },
                          { label: '10h', value: '10:00' },
                          { label: '11h', value: '11:00' },
                          { label: '12h', value: '12:00' },
                          { label: '13h', value: '13:00' },
                          { label: '14h', value: '14:00' },
                          { label: '15h', value: '15:00' },
                          { label: '16h', value: '16:00' },
                          { label: '17h', value: '17:00' },
                          { label: '18h', value: '18:00' },
                          { label: '19h', value: '19:00' },
                          { label: '20h', value: '20:00' },
                          { label: '21h', value: '21:00' },
                          { label: '22h', value: '22:00' },
                          { label: '23h', value: '23:00' },
                        ]}
                        placeholder="Selecione um horário"
                        defaultValue={scheduleItem.from}
                        onChangeItem={(item) =>
                          setScheduleItemValue(index, 'from', item.value)
                        }
                      />

                      <Select
                        label="Até"
                        items={[
                          { label: '00h', value: '00:00' },
                          { label: '01h', value: '01:00' },
                          { label: '02h', value: '02:00' },
                          { label: '03h', value: '03:00' },
                          { label: '05h', value: '05:00' },
                          { label: '06h', value: '06:00' },
                          { label: '07h', value: '07:00' },
                          { label: '08h', value: '08:00' },
                          { label: '09h', value: '09:00' },
                          { label: '10h', value: '10:00' },
                          { label: '11h', value: '11:00' },
                          { label: '12h', value: '12:00' },
                          { label: '13h', value: '13:00' },
                          { label: '14h', value: '14:00' },
                          { label: '15h', value: '15:00' },
                          { label: '16h', value: '16:00' },
                          { label: '17h', value: '17:00' },
                          { label: '18h', value: '18:00' },
                          { label: '19h', value: '19:00' },
                          { label: '20h', value: '20:00' },
                          { label: '21h', value: '21:00' },
                          { label: '22h', value: '22:00' },
                          { label: '23h', value: '23:00' },
                        ]}
                        placeholder="Selecione um horário"
                        defaultValue={scheduleItem.to}
                        onChangeItem={(item) =>
                          setScheduleItemValue(index, 'from', item.value)
                        }
                      />

                      <DeleteTimeContainer>
                        <DeleteTimeButton
                          onPress={() => removeScheduleItem(scheduleItem.id)}>
                          <DeleteTimeButtonIcon name="trash" size={15} />
                          <DeleteTimeButtonText>
                            Excluir horário
                          </DeleteTimeButtonText>
                        </DeleteTimeButton>
                      </DeleteTimeContainer>
                    </ScheduleItem>
                  ))}

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

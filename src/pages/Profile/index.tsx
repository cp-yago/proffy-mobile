// Dependencies
import React, { useCallback, useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/auth';

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

interface ScheduleItem {
  id: number;
  weekDay: number;
  from: string;
  to: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { updateUser } = useAuth();

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

  const handleUpdateProfile = useCallback(
    async (data) => {
      try {
        console.log('[API]: ', api.defaults.headers.authorization);
        const response = await api.put(
          '/users',
          {
            name: data.name,
            email: data.email,
            whatsapp: data.whatsapp,
            bio: data.bio,
          },
          { headers: { Authorization: api.defaults.headers.authorization } },
        );
        console.log('response: ', response.data);
        updateUser(response.data);
      } catch (err) {
        console.log(err);
      }
    },
    [updateUser],
  );

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
              <Form ref={formRef} onSubmit={handleUpdateProfile}>
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

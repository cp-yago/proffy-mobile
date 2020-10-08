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

// Components
import {
  AddNewTimeButton,
  AddNewTimeContainer,
  AddNewTimeIcon,
  AddNewTimeText,
  AvailableTimesContainer,
  HeaderContainer,
  Container,
  DeleteTimeButton,
  DeleteTimeButtonIcon,
  DeleteTimeButtonText,
  DeleteTimeContainer,
  ImageBackground,
  ProfileContainer,
  SectionDivider,
  SectionTitle,
  SubTitle,
  Title,
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
  week_day: number;
  from: string;
  to: string;
}

interface Class {
  id: string;
  user_id: string;
  subject: string;
  cost: number;
}

const CreateClass: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const navigation = useNavigation();

  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([]);

  const [subject, setSubject] = useState<string>('');
  const [cost, setCost] = useState<string>('');

  const addNewScheduleItem = useCallback(() => {
    if (scheduleItems.length > 0) {
      const id = scheduleItems.length;

      setScheduleItems([
        ...scheduleItems,
        { id, week_day: 1, from: '', to: '' },
      ]);
    } else {
      setScheduleItems([{ id: 0, week_day: 1, from: '', to: '' }]);
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
    (id: number, field: string, value: string) => {
      const updateScheduleItems = scheduleItems.map((scheduleItem) => {
        if (scheduleItem.id === id) {
          return { ...scheduleItem, [field]: value };
        } else {
          return scheduleItem;
        }
      });
      setScheduleItems(updateScheduleItems);
    },
    [scheduleItems],
  );

  const handleCreateClass = useCallback(async () => {
    const parsedScheduleItem = scheduleItems.map((scheduleItem) => {
      const { week_day, from, to } = scheduleItem;

      return { week_day, from, to };
    });

    const checkIfStartIsBeforeFinish = parsedScheduleItem.find(
      (scheduleItem) =>
        Number(scheduleItem.from.slice(0, 2)) >=
        Number(scheduleItem.to.slice(0, 2)),
    );

    if (checkIfStartIsBeforeFinish) {
      Alert.alert(
        'Atenção!',
        'Sua aula deve acabar em um horário posterior ao que começa.',
      );
      return;
    }

    try {
      const response = await api.post('/classes', {
        subject,
        cost: Number(cost),
      });

      const class_id = response.data.id;

      if (!class_id) {
        Alert.alert('Erro ao cadastrar aula. Tente novamente!');
        return;
      }

      if (parsedScheduleItem.length === 0) {
        return navigation.navigate('CreateClassSuccess');
      }

      await api.post(`/classes/${class_id}/class_schedules`, {
        classSchedules: parsedScheduleItem,
      });

      navigation.goBack();
    } catch (err) {
      console.log(err);
      Alert.alert('Erro ao cadastrar aula. Tente novamente!');
    }
  }, [cost, scheduleItems, subject, navigation]);

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
            <HeaderContainer>
              <ImageBackground source={backgroundImg} resizeMode="contain">
                <Title>Que incrível que você quer dar aulas!</Title>
                <SubTitle>
                  O primeiro passo é preencher o formulário abaixo e manter seu
                  perfil sempre atualizado.
                </SubTitle>
              </ImageBackground>
            </HeaderContainer>

            <ProfileContainer>
              <Form ref={formRef} onSubmit={handleCreateClass}>
                <SectionTitle>Sobre a aula</SectionTitle>
                <SectionDivider />

                <InputName>Matéria</InputName>
                <Input
                  name="subject"
                  placeholder="Ex: Matemática"
                  onChangeText={(text) => setSubject(text)}
                  icon="book-open"
                />

                <InputName>Custo da sua hora por aula</InputName>
                <Input
                  name="cost"
                  placeholder="Ex: 100"
                  onChangeText={(text) => setCost(text)}
                  icon="dollar-sign"
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
                          scheduleItem.week_day ? scheduleItem.week_day : 1
                        }
                        onChangeItem={(item) =>
                          setScheduleItemValue(
                            scheduleItem.id,
                            'week_day',
                            item.value,
                          )
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
                          setScheduleItemValue(
                            scheduleItem.id,
                            'from',
                            item.value,
                          )
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
                          setScheduleItemValue(
                            scheduleItem.id,
                            'to',
                            item.value,
                          )
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
                  Cadastrar aula
                </Button>
              </Form>
            </ProfileContainer>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default CreateClass;

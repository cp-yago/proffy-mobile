// Dependencies
import React, { useCallback, useEffect, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import trashIcon from '../../assets/images/icons/trash.png';

// Components
import {
  HeaderContainer,
  Container,
  ImageBackground,
  SubTitle,
  Title,
  ClassesContainer,
  ClassContainerHeader,
  SectionTitle,
  ClassHeaderContainer,
  ClassesContent,
  ClassDetails,
  Class,
  CreateClassButton,
  CreateClassIcon,
  CreateClassText,
  InfoContainer,
  InfoLabel,
  InfoValue,
  WeekSchedule,
  WeekScheduleHeader,
  WeekScheduleText,
  DeleteButton,
  DeleteIcon,
  DeleteText,
  NonExistingClasses,
} from './styles';

import PageHeader from '../../components/PageHeader';
import ScheduleItem from '../../components/ScheduleItem';

// Assets
import backgroundImg from '../../assets/images/signup-success-background.png';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

interface ClassSchedule {
  week_day: number;
  from: number;
  to: number;
}

interface Class {
  id: string;
  user_id: string;
  subject: string;
  cost: number;
  classes_schedules: ClassSchedule[];
}

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();

  const [classes, setClasses] = useState<Class[]>([]);

  useEffect(() => {
    const loadClasses = async () => {
      const response = await api.get('/teacher-classes');

      response.data && setClasses(response.data);
    };

    loadClasses();
  }, [classes]);

  const handleGoToCreateClassPage = useCallback(() => {
    navigation.navigate('CreateClass');
  }, [navigation]);

  const handleDeleteClass = useCallback(
    async (class_id) => {
      try {
        await api.delete(`/classes/${class_id}`);

        const updatedClasses = classes.filter(
          (classItem) => classItem.id !== class_id,
        );

        setClasses(updatedClasses);

        Alert.alert('A aula foi excluída!');
      } catch {
        Alert.alert('Não foi possível delete essa aula. Tente novamente!');
      }
    },
    [classes],
  );

  return (
    <>
      <PageHeader title="Minhas aulas" />
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
                <Title>Aqui você encontra suas aulas!</Title>
                <SubTitle>
                  Verifique abaixo todas suas aulas cadastradas e fique à
                  vontade para criar novas.
                </SubTitle>
              </ImageBackground>
            </HeaderContainer>

            <ClassesContainer>
              <ClassContainerHeader>
                <SectionTitle>Suas aulas</SectionTitle>

                <CreateClassButton onPress={handleGoToCreateClassPage}>
                  <CreateClassIcon name="plus" size={20} />
                  <CreateClassText>Criar aula</CreateClassText>
                </CreateClassButton>
              </ClassContainerHeader>

              <ScrollView horizontal>
                <ClassesContent>
                  {classes.length > 0 ? (
                    classes.map((classItem) => (
                      <Class key={classItem.id}>
                        <ClassHeaderContainer>
                          <ClassDetails>
                            <InfoContainer>
                              <InfoLabel>Matéria:{'  '}</InfoLabel>
                              <InfoValue>{classItem.subject}</InfoValue>
                            </InfoContainer>

                            <InfoContainer>
                              <InfoLabel>Preço/hora:{'  '}</InfoLabel>
                              <InfoValue>{classItem.cost}</InfoValue>
                            </InfoContainer>
                          </ClassDetails>

                          <DeleteButton
                            onPress={() => handleDeleteClass(classItem.id)}>
                            <DeleteIcon source={trashIcon} />
                            <DeleteText>Apagar</DeleteText>
                          </DeleteButton>
                        </ClassHeaderContainer>

                        <WeekSchedule>
                          <WeekScheduleHeader>
                            <WeekScheduleText>Dia</WeekScheduleText>
                            <WeekScheduleText>Horário</WeekScheduleText>
                          </WeekScheduleHeader>

                          {classItem.classes_schedules.length > 0 ? (
                            classItem.classes_schedules.map((daySchedule) => {
                              return (
                                <ScheduleItem
                                  key={daySchedule.week_day}
                                  daySchedule={daySchedule}
                                />
                              );
                            })
                          ) : (
                            <NonExistingClasses>
                              Não há cronograma para exibir
                            </NonExistingClasses>
                          )}
                        </WeekSchedule>
                      </Class>
                    ))
                  ) : (
                    <NonExistingClasses>
                      Não há aulas para exibir
                    </NonExistingClasses>
                  )}
                </ClassesContent>
              </ScrollView>
            </ClassesContainer>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default GiveClasses;

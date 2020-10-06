// Dependencies
import React, { useCallback, useEffect, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native';

// Components
import {
  HeaderContainer,
  Container,
  ImageBackground,
  SectionTitle,
  SubTitle,
  Title,
  ClassesContainer,
  NonExistingClasses,
} from './styles';

import Button from '../../components/Button';
import PageHeader from '../../components/PageHeader';

// Assets
import backgroundImg from '../../assets/images/signup-success-background.png';
import api from '../../services/api';
import { useNavigation } from '@react-navigation/native';

interface Class {
  id: string;
  user_id: string;
  subject: string;
  cost: number;
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
  }, []);

  const handleGoToCreateClassPage = useCallback(() => {
    navigation.navigate('CreateClass');
  }, [navigation]);

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
              <SectionTitle>Suas aulas</SectionTitle>

              {classes.length > 0 ? (
                <Text>tem aula</Text>
              ) : (
                <NonExistingClasses>
                  Não há aulas para exibir
                </NonExistingClasses>
              )}

              <Button onPress={handleGoToCreateClassPage}>Criar aula</Button>
            </ClassesContainer>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default GiveClasses;

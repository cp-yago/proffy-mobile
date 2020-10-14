import React, { useCallback, useEffect, useState } from 'react';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import ClassItem, { ClassItemProps } from '../../components/ClassItem';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  ClassListContainer,
  SearchFormContainer,
  SearchFormLabels,
  SearchButtom,
  SearchLabel,
  SearchFormTitle,
  ProffysCounter,
  SearchForms,
  InputGroup,
  SubmitButtom,
  SubmitButtomText,
} from './styles';
import api from '../../services/api';
import { ScrollView } from 'react-native-gesture-handler';

interface GetFilteredClassesResponse {
  totalClassesFound: number;
  totalClassesInPage: number;
  from: number;
  to: number;
  page: number;
  classes: ClassItemProps[];
}

const ClassList: React.FC = () => {
  const [filterVisible, setFilterVisible] = useState(false);
  const [filteredClassesData, setFilteredClassesData] = useState<
    GetFilteredClassesResponse
  >({
    totalClassesFound: 0,
    totalClassesInPage: 0,
    from: 0,
    to: 0,
    classes: [],
    page: 1,
  });

  const [subject, setSubject] = useState(null);
  const [week_day, setWeek_day] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    async function loadClasses() {
      const response = await api.get('/classes');

      setFilteredClassesData(response.data);
    }
    loadClasses();
  }, []);

  const handleFilterToggle = () => {
    setFilterVisible(!filterVisible);
  };

  const handleFiltersSubmit = useCallback(async () => {
    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setFilterVisible(false);

    setFilteredClassesData(response.data);
  }, [subject, week_day, time]);

  return (
    <Container>
      <PageHeader title="Estudar" name="Proffys Disponíveis" />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 10,
        }}>
        <SearchFormContainer>
          <SearchFormLabels>
            <SearchFormTitle>Aulas Disponíveis</SearchFormTitle>
            <ProffysCounter>
              {filteredClassesData.totalClassesInPage} aula(s)
            </ProffysCounter>
          </SearchFormLabels>

          <SearchButtom onPress={handleFilterToggle}>
            <Icon name="filter" size={20} color="#04D361" />
            <SearchLabel>Filtrar por dia, hora e matéria</SearchLabel>
            <Icon name="chevron-down" size={20} color="#A380F6" />
          </SearchButtom>
        </SearchFormContainer>

        {filterVisible && (
          <SearchForms>
            <Select
              label="Matéria"
              items={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Inglês', label: 'Inglês' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'História', label: 'História' },
                { value: 'Português', label: 'Português' },
                { value: 'Química', label: 'Química' },
                { value: 'Física', label: 'Física' },
              ]}
              placeholder="Selecione"
              defaultValue={subject}
              onChangeItem={(item) => setSubject(item.value)}
            />

            <Select
              label="Dia da semana"
              items={[
                { label: 'Segunda', value: 1 },
                { label: 'Terça', value: 2 },
                { label: 'Quarta', value: 3 },
                { label: 'Quinta', value: 4 },
                { label: 'Sexta', value: 5 },
              ]}
              placeholder="Selecione"
              defaultValue={week_day}
              onChangeItem={(item) => setWeek_day(item.value)}
            />

            <Select
              label="Horário"
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
              placeholder="Selecione"
              defaultValue={time}
              onChangeItem={(item) => setTime(item.value)}
            />

            <SubmitButtom onPress={handleFiltersSubmit}>
              <SubmitButtomText>Aplicar filtro</SubmitButtomText>
            </SubmitButtom>
          </SearchForms>
        )}

        <ClassListContainer>
          {filteredClassesData.classes.map((classItem: ClassItemProps) => (
            <ClassItem
              key={classItem.id}
              id={classItem.id}
              cost={classItem.cost}
              schedule={classItem.schedule}
              user={classItem.user}
              subject={classItem.subject}
            />
          ))}
        </ClassListContainer>
      </ScrollView>
    </Container>
  );
};

export default ClassList;

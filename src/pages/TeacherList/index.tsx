import {Container, TeacherListContainer} from './styles';

import PageHeader from '../../components/PageHeader';
import React from 'react';
import TeacherItem from '../../components/TeacherItem';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Estudar" name="Proffys Disponíveis" />

      <TeacherListContainer>
        <TeacherItem />
      </TeacherListContainer>
    </Container>
  );
};

export default TeacherList;

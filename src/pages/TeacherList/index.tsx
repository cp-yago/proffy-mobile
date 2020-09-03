import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import {Container, TeacherListContainer} from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Proffys disponíveis" />

      <TeacherListContainer>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </TeacherListContainer>
    </Container>
  );
};

export default TeacherList;

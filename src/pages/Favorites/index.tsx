import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import {Container, FavoritesScrollView} from './styles';

const Favorites = () => {
  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />

      <FavoritesScrollView>
        <TeacherItem />
      </FavoritesScrollView>
    </Container>
  );
};

export default Favorites;

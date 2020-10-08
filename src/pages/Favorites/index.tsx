import React, { useEffect, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import ClassItem, {
  GetFavoritedClassesResponseProps,
  ClassItemProps,
} from '../../components/ClassItem';

import { Container, FavoritesScrollView, NonExistingClasses } from './styles';
import api from '../../services/api';

const Favorites = () => {
  const [favorites, setFavorites] = useState<ClassItemProps[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const response = await api.get('/favorite-classes');

      let favoritedClasses: GetFavoritedClassesResponseProps[];

      favoritedClasses = response.data;

      const parsedFavoritedClasses = favoritedClasses.map(
        (favoritedClass) => favoritedClass.class,
      );

      setFavorites(parsedFavoritedClasses);
    };

    loadFavorites();
  }, [favorites]);

  return (
    <Container>
      <PageHeader title="Meus proffys favoritos" />

      <FavoritesScrollView>
        {favorites.length > 0 ? (
          favorites.map((classItem: ClassItemProps) => (
            <ClassItem
              key={classItem.id}
              id={classItem.id}
              cost={classItem.cost}
              schedule={classItem.schedule}
              user={classItem.user}
              subject={classItem.subject}
            />
          ))
        ) : (
          <NonExistingClasses>Não há favoritos para exibir</NonExistingClasses>
        )}
      </FavoritesScrollView>
    </Container>
  );
};

export default Favorites;

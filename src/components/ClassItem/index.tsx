import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Alert, Text } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';

import ScheduleItem from '../../components/ScheduleItem';
import api from '../../services/api';

import {
  Container,
  ProfileContainer,
  ProfileAvatar,
  ProfileInfoContainer,
  ProfileName,
  ProfileSubject,
  BioDescription,
  ProfileContainerFooter,
  Price,
  PriceValue,
  ButtonsContainer,
  FavoriteButton,
  FavoriteIcon,
  ContactButton,
  ContactButtonIcon,
  ContactButtonText,
  WeekSchedule,
  WeekScheduleHeader,
  WeekScheduleText,
} from './styles';

export interface Teacher {
  id: string;
  name: string;
  whatsapp?: string;
  avatar_url: string;
  bio?: string;
}

export interface ScheduleItem {
  id: string;
  week_day: number;
  from: number;
  to: number;
  class_id: number;
}

export interface ClassItemProps {
  id: string;
  cost: string;
  subject: string;
  user: Teacher;
  schedule?: ScheduleItem[];
}

export interface GetFavoritedClassesResponseProps {
  class: ClassItemProps;
}

const ClassItem: React.FC<ClassItemProps> = ({
  id,
  cost,
  subject,
  user,
  schedule,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const [teacherAvatar] = useState<string | undefined>(() => {
    if (user) {
      if (user.avatar_url) {
        return user.avatar_url;
      }
    } else {
      return 'https://m2bob-forum.net/wcf/images/avatars/3e/2720-3e546be0b0701e0cb670fa2f4fcb053d4f7e1ba5.jpg';
    }
  });

  useEffect(() => {
    const checkIfIsFavorite = async () => {
      const response = await api.get('/favorite-classes');

      let favoritedClasses: GetFavoritedClassesResponseProps[];

      favoritedClasses = response.data;

      const checkExist = favoritedClasses.find(
        (favoritedClass) => favoritedClass.class.id === id,
      );

      console.log(checkExist);

      if (checkExist) {
        setIsFavorite(true);
      }
    };

    checkIfIsFavorite();
  }, [id, isFavorite]);

  const daysSchedule = useMemo(() => {
    const weekDays = [1, 2, 3, 4, 5];

    const weekAvailability = weekDays.map((weekDay) => {
      if (schedule) {
        const foundDaySchedule = schedule.find(
          (daysScheduleItem: ScheduleItem) =>
            daysScheduleItem.week_day === weekDay,
        );

        if (foundDaySchedule) {
          return {
            ...foundDaySchedule,
            available: true,
          };
        }
      } else {
        return {
          from: 0,
          to: 0,
          class_id: 0,
          week_day: weekDay,
          available: false,
        };
      }
    });

    return weekAvailability;
  }, [schedule]);

  const handleToggleFavorite = useCallback(async () => {
    try {
      if (isFavorite) {
        await api.delete(`favorite-classes/${id}`);

        setIsFavorite(false);
      } else {
        await api.post(`favorite-classes/${id}`);

        setIsFavorite(true);
      }
    } catch (err) {
      console.log(err);
      Alert.alert(
        'Não foi possível adicionar ou remover essa aula dos favoritos. Tente novamente!',
      );
    }
  }, [isFavorite, id]);

  return (
    <Container>
      <ProfileContainer>
        <ProfileAvatar
          source={{
            uri: teacherAvatar,
          }}
        />

        <ProfileInfoContainer>
          <ProfileName>{user.name}</ProfileName>
          <ProfileSubject>{subject}</ProfileSubject>
        </ProfileInfoContainer>
      </ProfileContainer>

      <BioDescription>{user.bio}</BioDescription>

      <WeekSchedule>
        <WeekScheduleHeader>
          <WeekScheduleText>Dia</WeekScheduleText>
          <WeekScheduleText>Horário</WeekScheduleText>
        </WeekScheduleHeader>

        {daysSchedule &&
          daysSchedule.map((daySchedule) => {
            if (daySchedule) {
              if (daySchedule.from !== daySchedule.to) {
                return (
                  <ScheduleItem
                    key={daySchedule.week_day}
                    daySchedule={daySchedule}
                  />
                );
              }
            } else {
              return <Text>Sem cronograma para mostrar</Text>;
            }
          })}
      </WeekSchedule>

      <ProfileContainerFooter>
        <Price>Preço/hora {'  '}</Price>
        <PriceValue>{cost}</PriceValue>
      </ProfileContainerFooter>

      <ButtonsContainer>
        <FavoriteButton favorited={isFavorite} onPress={handleToggleFavorite}>
          {isFavorite ? (
            <FavoriteIcon source={unfavoriteIcon} />
          ) : (
            <FavoriteIcon source={heartOutlineIcon} />
          )}
        </FavoriteButton>

        <ContactButton>
          <ContactButtonIcon source={whatsAppIcon} />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </ButtonsContainer>
    </Container>
  );
};

export default ClassItem;

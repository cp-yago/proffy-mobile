import React, { useEffect, useMemo } from 'react';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import whatsAppIcon from '../../assets/images/icons/whatsapp.png';

import ScheduleItem from '../../components/ScheduleItem';

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
  WeekSCheduleText,
} from './styles';

export interface Teacher {
  id: string;
  avatar: string;
  bio: string;
  cost: string;
  name: string;
  subject: string;
  whatsapp: string;
}

export interface ScheduleItem {
  week_day: number;
  from: number;
  to: number;
  class_id: number;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited?: boolean;
  schedule: ScheduleItem[];
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, schedule }) => {
  const daysSchedule = useMemo(() => {
    const weekDays = [1, 2, 3, 4, 5];

    const weekAvailability = weekDays.map((weekDay) => {
      const foundDaySchedule = schedule.find(
        (daysSchedule) => daysSchedule.week_day === weekDay,
      );

      if (foundDaySchedule) {
        return {
          ...foundDaySchedule,
          available: true,
        };
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

  useEffect(() => {
    console.log('daysSchedule', daysSchedule);
  }, [daysSchedule]);

  return (
    <Container>
      <ProfileContainer>
        <ProfileAvatar
          source={{
            uri:
              'https://avatars3.githubusercontent.com/u/22509891?s=460&u=1928b8f61bd9f9a3877091fe1c3c7c448a97a29f&v=4',
          }}
        />

        <ProfileInfoContainer>
          <ProfileName>{teacher.user.name}</ProfileName>
          <ProfileSubject>{teacher.subject}</ProfileSubject>
        </ProfileInfoContainer>
      </ProfileContainer>

      <BioDescription>{teacher.user.bio}</BioDescription>

      <WeekSchedule>
        <WeekScheduleHeader>
          <WeekSCheduleText>Dia</WeekSCheduleText>
          <WeekSCheduleText>Horário</WeekSCheduleText>
        </WeekScheduleHeader>

        {daysSchedule.map((daySchedule) => {
          return (
            <ScheduleItem
              key={daySchedule.week_day}
              daySchedule={daySchedule}
            />
          );
        })}
      </WeekSchedule>

      <ProfileContainerFooter>
        <Price>Preço/hora {'  '}</Price>
        <PriceValue>{teacher.cost}</PriceValue>
      </ProfileContainerFooter>

      <ButtonsContainer>
        <FavoriteButton favorited={false}>
          <FavoriteIcon source={heartOutlineIcon} />
        </FavoriteButton>

        <ContactButton>
          <ContactButtonIcon source={whatsAppIcon} />
          <ContactButtonText>Entrar em contato</ContactButtonText>
        </ContactButton>
      </ButtonsContainer>
    </Container>
  );
};

export default TeacherItem;

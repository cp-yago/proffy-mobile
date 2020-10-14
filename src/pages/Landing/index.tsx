import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';

import {
  Avatar,
  AvatarContainer,
  Button,
  ButtonImage,
  ButtonText,
  ButtonsContainer,
  Container,
  MainBanner,
  ProfileButton,
  ProfileContainer,
  SignOutButton,
  SignOutIcon,
  Title,
  TitleBold,
  TotalConnectionsIcon,
  TotalConnectionsText,
  UserName,
} from './styles';

import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();
  const { signOut, user } = useAuth();

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    const loadConnections = async () => {
      const response = await api.get('/connections');

      setTotalConnections(response.data);
    };

    loadConnections();
  }, [totalConnections]);

  const handleNavigateStudyPage = () => {
    navigate('Study');
  };

  const handleNavigateGiveClassesPage = () => {
    navigate('GiveClasses');
  };

  const handleSignOut = () => {
    signOut();
  };

  const navigateToProfile = () => {
    navigate('Profile');
  };

  return (
    <Container>
      <ProfileContainer>
        <AvatarContainer>
          <ProfileButton onPress={navigateToProfile}>
            <Avatar
              source={{
                uri: user.avatar_url
                  ? user.avatar_url
                  : 'https://m2bob-forum.net/wcf/images/avatars/3e/2720-3e546be0b0701e0cb670fa2f4fcb053d4f7e1ba5.jpg',
              }}
            />
          </ProfileButton>

          <UserName>{user.name}</UserName>
        </AvatarContainer>
        <SignOutButton onPress={handleSignOut}>
          <SignOutIcon name="power" size={20} />
        </SignOutButton>
      </ProfileContainer>

      <MainBanner source={landingImg} />

      <Title>Seja bem-vindo,</Title>
      <TitleBold>O que deseja fazer?</TitleBold>

      <ButtonsContainer>
        <Button name="study" onPress={handleNavigateStudyPage}>
          <ButtonImage source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </Button>

        <Button name="giveClass" onPress={handleNavigateGiveClassesPage}>
          <ButtonImage source={giveClassesIcon} />
          <ButtonText>Dar aulas</ButtonText>
        </Button>
      </ButtonsContainer>

      <TotalConnectionsText>
        Total de {totalConnections} conexões já realizadas{' '}
        <TotalConnectionsIcon source={heartIcon} />
      </TotalConnectionsText>
    </Container>
  );
};

export default Landing;

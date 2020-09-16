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

import React from 'react';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import {useAuth} from '../../hooks/auth';
import {useNavigation} from '@react-navigation/native';

const Landing: React.FC = () => {
  const {navigate} = useNavigation();
  const {signOut, user} = useAuth();

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
                uri:
                  'https://avatars3.githubusercontent.com/u/22509891?s=460&u=1928b8f61bd9f9a3877091fe1c3c7c448a97a29f&v=4',
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
        Total de 0 conexões já realizadas{' '}
        <TotalConnectionsIcon source={heartIcon} />
      </TotalConnectionsText>
    </Container>
  );
};

export default Landing;

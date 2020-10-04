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
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();
  const { signOut, user } = useAuth();

  const handleNavigateStudyPage = () => {
    navigate('Study');
  };

  const handleNavigateGiveClassesPage = () => {
    console.log('foi ');
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
                  : 'https://lh3.googleusercontent.com/proxy/KM8FufXYH35HNvM3spbl27-KFUe-ibgMVGLzWHI0xybIqsbHDeEIWg42N6xDv_Q81vuLIOjhhBNYvANF0jmuXx1TpNgcXI3mwHd3h7ZZt45Ovgd2ZhVq4ec',
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

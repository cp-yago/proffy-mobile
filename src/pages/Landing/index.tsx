import React from 'react';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import {
  Container,
  MainBanner,
  Title,
  TitleBold,
  ButtonsContainer,
  Button,
  ButtonImage,
  ButtonText,
  TotalConnectionsText,
  TotalConnectionsIcon,
} from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <MainBanner source={landingImg} />

      <Title>Seja bem-vindo,</Title>
      <TitleBold>O que deseja fazer?</TitleBold>

      <ButtonsContainer>
        <Button name="study">
          <ButtonImage source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </Button>

        <Button name="giveClass">
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

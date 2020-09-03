import React from 'react';

import giveClassesbBgImage from '../../assets/images/give-classes-background.png';

import {
  Container,
  BackgroundImage,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';

const GiveClasses: React.FC = () => {
  return (
    <Container>
      <BackgroundImage source={giveClassesbBgImage}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web
        </Description>
      </BackgroundImage>

      <OkButton>
        <OkButtonText>Tudo bem</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default GiveClasses;

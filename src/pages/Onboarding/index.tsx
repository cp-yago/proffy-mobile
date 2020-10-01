import React, { useCallback, useRef } from 'react';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-community/async-storage';

import nextIcon from '../../assets/images/next.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import onboardingBackground from '../../assets/images/onboarding-background.png';
import onboarding2Background from '../../assets/images/onboarding-2background.png';

import {
  styles,
  Container,
  OnboardingContainer,
  Header,
  Header2,
  ImageBackground,
  PageIcon,
  Main,
  PageNumber,
  Description,
  NextButton,
  NextButtonIcon,
} from './styles';
import { useNavigation } from '@react-navigation/native';

const Onboarding: React.FC = () => {
  const swiper = useRef<Swiper>(null);
  const { navigate } = useNavigation();

  const handleNextPage = useCallback(() => {
    navigate('SignIn');
    AsyncStorage.setItem('Proffy:IsOnboardCompleted', 'true');
  }, [navigate]);

  return (
    <Container>
      <Swiper
        ref={swiper}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        paginationStyle={styles.pagination}
        loop={false}
        style={styles.wrapper}>
        <OnboardingContainer>
          <Header>
            <ImageBackground resizeMode="center" source={onboardingBackground}>
              <PageIcon source={studyIcon} />
            </ImageBackground>
          </Header>

          <Main>
            <PageNumber>01.</PageNumber>
            <Description>
              Encontre vários professores para ensinar você
            </Description>

            <NextButton onPress={handleNextPage}>
              <NextButtonIcon source={nextIcon} />
            </NextButton>
          </Main>
        </OnboardingContainer>

        <OnboardingContainer>
          <Header2>
            <ImageBackground resizeMode="center" source={onboarding2Background}>
              <PageIcon source={giveClassesIcon} />
            </ImageBackground>
          </Header2>

          <Main>
            <PageNumber>02.</PageNumber>
            <Description>Ou dê aulas sobre o que você mais conhece</Description>

            <NextButton onPress={handleNextPage}>
              <NextButtonIcon source={nextIcon} />
            </NextButton>
          </Main>
        </OnboardingContainer>
      </Swiper>
    </Container>
  );
};

export default Onboarding;

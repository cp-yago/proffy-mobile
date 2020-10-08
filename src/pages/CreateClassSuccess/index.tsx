import {
  Container,
  GoToLoginButtom,
  GoToLoginButtomText,
  ImageBackground,
  SuccessImage,
  SuccessSubtitle,
  SuccessTitle,
} from './styles';

import React, { useCallback } from 'react';
import backgroundImg from '../../assets/images/signup-success-background.png';
import successImg from '../../assets/images/signup-sucess.png';
import { useNavigation } from '@react-navigation/native';

const GiveClassesSuccess: React.FC = () => {
  const { reset } = useNavigation();

  const handleFinished = useCallback(() => {
    reset({
      routes: [{ name: 'GiveClasses' }],
      index: 0,
    });
  }, [reset]);

  return (
    <Container>
      <ImageBackground resizeMode="contain" source={backgroundImg}>
        <SuccessImage source={successImg} />
        <SuccessTitle>Aula {'\n'}registrada</SuccessTitle>
        <SuccessSubtitle>
          Tudo certo, sua aula foi cadastrada na nossa plataforma. Agora é só
          aguardar algum aluno entrar em contato.
        </SuccessSubtitle>
      </ImageBackground>
      <GoToLoginButtom onPress={handleFinished}>
        <GoToLoginButtomText>Concluído</GoToLoginButtomText>
      </GoToLoginButtom>
    </Container>
  );
};

export default GiveClassesSuccess;

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

const RedefinitionSentSuccess: React.FC = () => {
  const navigation = useNavigation();

  const handleFinished = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);

  return (
    <Container>
      <ImageBackground resizeMode="contain" source={backgroundImg}>
        <SuccessImage source={successImg} />
        <SuccessTitle>Redefinição enviada!</SuccessTitle>
        <SuccessSubtitle>
          Boa, agora é só checar o e-mail que foi enviado para você redefinir
          sua senha e aproveitar os estudos.
        </SuccessSubtitle>
      </ImageBackground>
      <GoToLoginButtom onPress={handleFinished}>
        <GoToLoginButtomText>Voltar ao login</GoToLoginButtomText>
      </GoToLoginButtom>
    </Container>
  );
};

export default RedefinitionSentSuccess;

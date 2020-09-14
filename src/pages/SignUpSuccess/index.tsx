import {
  Container,
  GoToLoginButtom,
  GoToLoginButtomText,
  ImageBackground,
  SuccessImage,
  SuccessSubtitle,
  SuccessTitle,
} from './styles';

import React from 'react';
import backgroundImg from '../../assets/images/signup-success-background.png';
import successImg from '../../assets/images/signup-sucess.png';
import {useNavigation} from '@react-navigation/native';

const SignUpSuccess: React.FC = () => {
  const {navigate} = useNavigation();

  const handleGoToLogin = () => {
    navigate('SignIn');
  };

  return (
    <Container>
      <ImageBackground resizeMode="contain" source={backgroundImg}>
        <SuccessImage source={successImg} />
        <SuccessTitle>Cadastro concluído!</SuccessTitle>
        <SuccessSubtitle>
          Agora você faz parte da plataforma Proffy!
        </SuccessSubtitle>
      </ImageBackground>
      <GoToLoginButtom onPress={handleGoToLogin}>
        <GoToLoginButtomText>Fazer login</GoToLoginButtomText>
      </GoToLoginButtom>
    </Container>
  );
};

export default SignUpSuccess;

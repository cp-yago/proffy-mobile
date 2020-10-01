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
      routes: [{ name: 'Landing' }],
      index: 0,
    });
  }, [reset]);

  return (
    <Container>
      <ImageBackground resizeMode="contain" source={backgroundImg}>
        <SuccessImage source={successImg} />
        <SuccessTitle>Cadastro salvo!</SuccessTitle>
        <SuccessSubtitle>
          Tudo certo, seu cadastro está nna nossa lista de professores. Agora é
          só ficar de olho no seu Whatsapp.
        </SuccessSubtitle>
      </ImageBackground>
      <GoToLoginButtom onPress={handleFinished}>
        <GoToLoginButtomText>Concluído</GoToLoginButtomText>
      </GoToLoginButtom>
    </Container>
  );
};

export default GiveClassesSuccess;

import styled from 'styled-components/native';

import {TextInputProps} from 'react-native';

interface InputProps extends TextInputProps {
  name: string;
}

export const Container = styled.View`
  flex: 1;
  background: #e5e5e5;
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 379px;
`;

export const BackgroundImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #8257e5;
`;

export const LogoImage = styled.Image`
  height: 47px;
`;

export const Description = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #d4c2ff;
  width: 140px;
  margin-left: -19px;
`;

export const FormLoginContainer = styled.View`
  flex: 1;
  /* align-items: center; */
  justify-content: center;
  margin-left: 40px;
  margin-right: 40px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: -40px;
`;

export const Title = styled.Text`
  font-family: 'Archivo_700Bold';
  font-size: 24px;
  color: #32264d;
  margin: 30px;
`;

export const LinkSignUp = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #8257e5;
  margin: 30px;
`;

export const CheckBoxContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const CheckBoxText = styled.Text`
  color: #9c98a6;
`;

export const ForgotPasswordLink = styled.Text`
  margin-left: auto;
  color: #9c98a6;
`;

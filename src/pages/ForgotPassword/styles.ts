import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import { TextInputProps } from 'react-native';

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
  font-family: 'Poppins-Regular';
  color: #d4c2ff;
  width: 140px;
  margin-left: -19px;
`;

export const FormLoginContainer = styled.View`
  flex: 1;
  justify-content: center;
  margin-left: 40px;
  margin-right: 40px;
`;

export const TitleContainer = styled.View`
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 24px;
  color: #32264d;
`;

export const SubTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 14px;
  color: #6a6180;
`;

export const GoBackButton = styled(RectButton)`
  margin-bottom: 20px;
`;

export const GoBackButtonIcon = styled.Image``;

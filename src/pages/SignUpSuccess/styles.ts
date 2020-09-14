import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background: #8257e5;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const SuccessImage = styled.Image`
  margin: 20px;
`;

export const SuccessTitle = styled.Text`
  font-family: 'Archivo-Regular';
  color: #ffffff;
  font-size: 32px;
  width: 162px;
  text-align: center;
  margin: 10px 20px;
`;

export const SuccessSubtitle = styled.Text`
  font-size: 14px;
  line-height: 24px;
  width: 200px;
  text-align: center;
  color: #d4c2ff;
`;

export const GoToLoginButtom = styled(RectButton)`
  height: 58px;
  width: 300px;
  align-items: center;
  justify-content: center;
  background: #04d361;
  border-radius: 8px;
  margin: 60px;
`;

export const GoToLoginButtomText = styled.Text`
  font-family: 'Archivo-Regular';
  color: #ffffff;
`;

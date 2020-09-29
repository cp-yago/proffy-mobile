import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const PageHeaderContainer = styled.View`
  padding: 25px;
  background: #774dd6;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Archivo-Bold';
  color: #fff;
  font-size: 14px;
  line-height: 32px;
  max-width: 160px;
  margin-left: 70px;
  margin-right: 70px;
`;

export const GoBackButton = styled(RectButton)``;

export const GoBackButtonIcon = styled.Image``;

export const Logo = styled.Image``;

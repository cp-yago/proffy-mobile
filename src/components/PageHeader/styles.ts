import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const PageHeaderContainer = styled.View`
  padding: 40px;
  background: #8257e5;
`;

export const TopBar = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const GoBackButton = styled(RectButton)``;

export const GoBackButtonIcon = styled.Image``;

export const Logo = styled.Image``;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 24px;
  line-height: 32px;
  max-width: 160px;
  /* margin-vertical: 40px; */
`;

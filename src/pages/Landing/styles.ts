import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

interface ButtonProps {
  name: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 40px;
`;

export const MainBanner = styled.Image`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`;

export const TitleBold = styled.Text`
  font-family: 'Poppins_600SemiBold';
  color: #fff;
  font-size: 20px;
  line-height: 30px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 40px;
  justify-content: space-between;
`;

export const Button = styled(RectButton)<ButtonProps>`
  height: 150px;
  width: 48%;
  background-color: ${(props) =>
    props.name === 'study' ? '#9871f5 ' : '#04d361'};
  padding: 24px;
  justify-content: space-between;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #fff;
  font-size: 20px;
`;

export const ButtonImage = styled.Image``;

export const TotalConnectionsText = styled.Text`
  font-family: 'Poppings_400Regular';
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;

export const TotalConnectionsIcon = styled.Image``;

import FeatherIcon from 'react-native-vector-icons/Feather';
import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface ButtonProps {
  name: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: #8257e5;
  justify-content: center;
  padding: 30px;
`;

export const ProfileContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const ProfileButton = styled.TouchableOpacity``;

export const AvatarContainer = styled.View`
  /* width: 100%; */
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const UserName = styled.Text`
  font-family: 'Poppins-Regular';
  color: #d4c2ff;
  font-size: 16px;
  margin-left: 15px;
`;

export const SignOutButton = styled(RectButton)`
  background: #774dd6;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  border: 2px solid blue;
  justify-content: center;
  align-items: center;
`;

export const SignOutIcon = styled(FeatherIcon)`
  color: #d4c2ff;
  justify-content: center;
  align-items: center;
`;

export const MainBanner = styled.Image`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: 'Poppins-Regular';
  color: #fff;
  font-size: 20px;
  line-height: 30px;
  margin-top: 80px;
`;

export const TitleBold = styled.Text`
  font-family: 'Poppins-SemiBold';
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
  font-family: 'Archivo-Bold';
  color: #fff;
  font-size: 20px;
`;

export const ButtonImage = styled.Image``;

export const TotalConnectionsText = styled.Text`
  font-family: 'Poppins-Regular';
  color: #d4c2ff;
  font-size: 12px;
  line-height: 20px;
  max-width: 140px;
  margin-top: 40px;
`;

export const TotalConnectionsIcon = styled.Image``;

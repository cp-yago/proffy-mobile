import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface FavoriteButtonProps {
  favorited: boolean;
}

export const Container = styled.View`
  background-color: #fff;
  border: 1px solid #e6e6f0;
  border-radius: 8px;
  margin: 10px;
  margin-bottom: 16px;
  overflow: hidden;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const ProfileAvatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #eee;
`;

export const ProfileInfoContainer = styled.View`
  margin-left: 16px;
`;

export const ProfileName = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #32264d;
  font-size: 20px;
`;

export const ProfileSubject = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #6a6180;
  font-size: 12px;
  margin-top: 4px;
`;

export const BioDescription = styled.Text`
  margin-left: 24px;
  margin-right: 24px;
  font-family: 'Poppins_400Regular';
  font-size: 14px;
  line-height: 24px;
  color: #6a6180;
`;

export const ProfileContainerFooter = styled.View`
  flex-direction: row;
  justify-content: center;
  background-color: #fafafc;
  padding: 24px;
  align-items: center;
  margin-top: 24px;
`;

export const Price = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #6a6180;
  font-size: 14px;
`;

export const PriceValue = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #8257e5;
  font-size: 16px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin: 16px;
`;

export const FavoriteButton = styled(RectButton)<FavoriteButtonProps>`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;

  background-color: ${(props) => (props.favorited ? '#e33d3d' : '#8257e5')};
`;

export const FavoriteIcon = styled.Image``;

export const ContactButton = styled(RectButton)`
  background-color: #04d361;
  flex: 1;
  height: 56px;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

export const ContactButtonIcon = styled.Image``;

export const ContactButtonText = styled.Text`
  color: #fff;
  font-family: 'Archivo_700Bold';
  font-size: 16px;
  margin-left: 16px;
`;

export const WeekSchedule = styled.View`
  border-top-width: 1px;
  border-top-color: #e6e6f0;
  margin-top: 18px;
  align-items: center;
`;

export const WeekScheduleHeader = styled.View`
  flex-direction: row;
  width: 70%;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const WeekSCheduleText = styled.Text`
  font-family: 'Poppins-Regular';
  font-weight: 400;
  font-size: 10px;
  color: #9c98a6;
`;

import FeatherIcon from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #e6e6f0;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  background: #8257e5;
  align-items: center;
  padding: 30px;
`;

export const AvatarContainer = styled.View`
  height: 330px;
  justify-content: center;
  /* border: 1px solid red; */
`;

export const UserAvatar = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UpdateAvatarIcon = styled(FeatherIcon)`
  background: #04d361;
  color: #ffffff;
  border-radius: 20px;
  padding: 10px;
  width: 40px;
  align-self: flex-end;
  margin-top: -40px;
`;

export const UserName = styled.Text`
  font-family: 'Archivo-Regular';
  color: #ffffff;
  font-size: 24px;
  margin-top: 10px;
`;

export const Subject = styled.Text`
  font-family: 'Poppins-Regular';
  color: #d4c2ff;
  font-size: 16px;
  margin-top: 10px;
`;

export const ProfileContainer = styled.View`
  flex: 1;
  background: #fff;
  margin: 10px;
  margin-top: -40px;
  border: 1px solid #e6e6f0;
  border-radius: 8px;
  padding: 15px 30px;
`;

export const SectionDivider = styled.View`
  width: 100%;
  height: 1px;
  background: #e6e6f0;
  margin: 10px 0;
`;

export const SectionTitle = styled.Text`
  font-family: 'Archivo-Regular';
  color: #32264d;
  font-size: 20px;
`;

export const InputName = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  color: #9c98a6;
  margin-top: 10px;
`;

export const PickerIcon = styled(FeatherIcon)``;

export const AvailableTimesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const AddNewTimeContainer = styled.View``;

export const AddNewTimeButton = styled.TouchableOpacity`
  flex-direction: row;
  align-content: center;
  align-items: center;
`;

export const AddNewTimeIcon = styled(FeatherIcon)`
  font-family: 'Archivo-Regular';
  font-size: 14px;
  color: #8257e5;
`;

export const AddNewTimeText = styled.Text`
  color: #8257e5;
  margin-left: 5px;
`;

export const DeleteTimeContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`;

export const DeleteTimeButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const DeleteTimeButtonIcon = styled(FeatherIcon)`
  color: #e33d3d;
`;

export const DeleteTimeButtonText = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 12px;
  color: #e33d3d;
  margin-left: 10px;
`;

export const ScheduleItem = styled.View``;

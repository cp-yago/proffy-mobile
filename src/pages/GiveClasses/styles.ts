import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background: #e6e6f0;
`;

export const ImageBackground = styled.ImageBackground`
  flex: 1;
  background: #8257e5;
  align-items: center;
  padding: 20px;
`;

export const HeaderContainer = styled.View`
  height: 250px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Archivo-Regular';
  color: #ffffff;
  font-size: 22px;
`;

export const SubTitle = styled.Text`
  font-family: 'Poppins-Regular';
  color: #d4c2ff;
  font-size: 16px;
  margin-top: 16px;
`;

export const ClassesContainer = styled.View`
  flex: 1;
  background: #fff;
  margin: 10px;
  margin-top: -100px;
  border: 1px solid #e6e6f0;
  border-radius: 8px;
`;

export const ClassContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const CreateClassButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const CreateClassIcon = styled(FeatherIcon)`
  font-family: 'Archivo-Regular';
  font-size: 16px;
  color: #8257e5;
`;

export const CreateClassText = styled.Text`
  color: #8257e5;
  margin-left: 4px;
`;

export const SectionTitle = styled.Text`
  font-family: 'Archivo-Regular';
  color: #32264d;
  font-size: 20px;
`;

export const ClassesContent = styled.View`
  flex-direction: row;
`;

export const Class = styled.View`
  flex: 1;
  border: 1px;
  border-color: #e6e6f0;
  border-radius: 8px;
  margin: 0 16px 8px;
  padding: 0 8px;
`;

export const ClassHeaderContainer = styled.View`
  flex-direction: row;
  padding: 16px;
  align-items: center;
`;

export const ClassDetails = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
`;

export const InfoLabel = styled.Text`
  font-family: 'Poppins_400Regular';
  color: #6a6180;
  font-size: 14px;
`;

export const InfoValue = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #8257e5;
  font-size: 16px;
`;

export const DeleteButton = styled(RectButton)`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const DeleteIcon = styled.Image`
  margin-left: auto;
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const DeleteText = styled.Text`
  font-family: 'Archivo_700Bold';
  color: #e33d3d;
  font-size: 16px;
`;

export const WeekSchedule = styled.View`
  border-top-width: 1px;
  border-top-color: #e6e6f0;
  margin-top: 8px;
  align-items: center;
`;

export const WeekScheduleHeader = styled.View`
  flex-direction: row;
  width: 70%;
  margin-top: 8px;
  justify-content: space-between;
  align-items: center;
`;

export const WeekScheduleText = styled.Text`
  font-family: 'Poppins-Regular';
  font-weight: 400;
  font-size: 10px;
  color: #9c98a6;
`;

export const NonExistingClasses = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 16px;
  color: #9c98a6;
  margin-left: 16px;
`;

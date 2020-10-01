import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #f0f0f7;
`;

export const OnboardingContainer = styled.View`
  flex: 1;
  align-items: center;
`;

export const Header = styled.View`
  width: 100%;
  height: 350px;
  background: #8257e5;
  justify-content: center;
  align-items: center;
`;

export const Header2 = styled.View`
  width: 100%;
  height: 350px;
  background: #04d361;
  justify-content: center;
  align-items: center;
`;

export const ImageBackground = styled.ImageBackground``;

export const PageIcon = styled.Image`
  height: 100px;
  width: 100px;
`;

export const Main = styled.View`
  flex: 1;
  width: 100%;
  background: #e5e5e5;

  justify-content: center;
  padding: 25px;
`;

export const PageNumber = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 40px;
  color: #6a6180;
  opacity: 0.16;
  margin-bottom: 30px;
`;

export const Description = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 24px;
  color: #6a6180;
`;

export const NextButton = styled.TouchableOpacity`
  position: absolute;
  right: 60px;
  bottom: 50px;
`;

export const NextButtonIcon = styled.Image``;

export const styles = StyleSheet.create({
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },

  activeDot: {
    backgroundColor: '#8257E5',
    width: 6,
    height: 6,
    borderRadius: 3,
  },

  pagination: {
    position: 'absolute',
    bottom: 60,
    right: 'auto',
    left: 50,
  },

  wrapper: {},
});

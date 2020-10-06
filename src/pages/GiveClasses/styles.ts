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

export const HeaderContainer = styled.View`
  height: 250px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: 'Archivo-Regular';
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
  font-family: 'Poppins-Regular';
  color: #d4c2ff;
  font-size: 16px;
  margin-top: 10px;
`;

export const ClassesContainer = styled.View`
  flex: 1;
  background: #fff;
  margin: 10px;
  margin-top: -40px;
  border: 1px solid #e6e6f0;
  border-radius: 8px;
  padding: 15px 30px;
`;

export const SectionTitle = styled.Text`
  font-family: 'Archivo-Regular';
  color: #32264d;
  font-size: 20px;
`;

export const NonExistingClasses = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  color: #9c98a6;
  margin-top: 10px;
`;

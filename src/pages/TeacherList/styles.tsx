import styled from 'styled-components/native';

import { StyleSheet } from 'react-native';

export const Container = styled.View``;

export const TeacherListContainer = styled.ScrollView`
  /* margin-top: -40px; */
`;

export const SearchFormContainer = styled.View`
  width: 100%;
  height: 200px;
  background: #8257e5;
  /* align-items: center; */
`;

export const SearchFormLabels = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px;
`;

export const SearchFormTitle = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 24px;
  color: #ffffff;
  max-width: 150px;
`;

export const ProffysCounter = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 12px;
  color: #d4c2ff;
`;

export const SearchButtom = styled.TouchableOpacity`
  border: 1px solid #a380f6;
  border-radius: 8px;
  width: 321px;
  height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  padding: 5px 10px;
`;

export const SearchLabel = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 16px;
  line-height: 19px;
  color: #d4c2ff;
`;

export const SearchForms = styled.View`
  width: 100%;
  height: 300px;
  background: #8257e5;
  justify-content: center;
  align-items: center;

  /* border: 1px solid red; */
  margin-top: -30px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 340px;
  padding-top: 10px;
`;

export const styles = StyleSheet.create({
  inputBlock: {
    width: 150,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
});

export const SubmitButtom = styled.TouchableOpacity`
  background-color: #04d361;
  height: 56px;
  width: 80%;
  border-radius: 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const SubmitButtomText = styled.Text`
  font-family: 'Archivo-Regular';
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
`;

// Inports
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const LabelText = styled.Text``;

export const styles = StyleSheet.create({
  container: {},

  label: {
    color: '#9c98a6',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },

  input: {
    height: 56,
    backgroundColor: '#fafafc',
    borderRadius: 10,
    borderColor: '#e6e6f0',
    borderWidth: 2,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 12,
  },

  dropDownStyle: {
    backgroundColor: '#F8F8FC',
  },

  placeholderStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#C1BCCC',
  },

  option: {
    justifyContent: 'flex-start',
    borderBottomColor: '#E6E6F0',
    borderBottomWidth: 1,
  },

  activeOption: {
    borderLeftWidth: 1,
    borderLeftColor: '#8257E5',
    backgroundColor: '#EBEBF5',
  },

  optionLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#6A6180',
    marginLeft: 10,
  },
});

import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  border-width: 2px;
  border: 1px solid #e6e6f0;
`;

export const InputContainer = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;

  background-color: #fafafc;

  border-radius: 10px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

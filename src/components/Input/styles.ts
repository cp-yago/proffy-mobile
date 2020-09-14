import styled, {css} from 'styled-components/native';

import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;

  border: 2px solid #e6e6f0;
  background-color: #fafafc;

  border-radius: 10px;

  ${(props) =>
    props.isFocused &&
    css`
      border: 1px solid #8257e5;
    `}

  margin-bottom: 3px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #6a6180;
  font-family: 'RobotoSlab-Regular';
`;

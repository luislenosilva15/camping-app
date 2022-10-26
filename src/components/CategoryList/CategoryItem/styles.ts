import {Image, View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const Button = styled(TouchableOpacity)`
  background-color: ${props => (props.active ? '#FFE271' : '#E9E9E9')};
  padding: 15px;
  margin: 6px;
  border-radius: 40px;
`;

export const Title = styled(Text)`
  margin-top: 8px;
  font-size: 17px;
  color: #323232;
  font-weight: 300;
`;

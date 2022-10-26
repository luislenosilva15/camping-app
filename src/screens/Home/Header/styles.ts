import {Image, View, Text} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  background-color: white;
  margin-top: 30px;
  margin-bottom: 18px;
`;

export const IconUser = styled(Image)`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const Title = styled(Text)`
  margin-top: 8px;
  font-size: 17px;
  color: #323232;
  font-weight: 300;
`;

export const SubTitle = styled(Text)`
  margin-top: 8px;
  font-size: 17px;
  margin-top: 10px;
  font-weight: 400;
  color: #151515;
`;

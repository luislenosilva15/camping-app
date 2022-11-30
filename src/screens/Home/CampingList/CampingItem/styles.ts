import {View, Text, Image} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  margin-top: 20px;
  background-color: #f8f8f8;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 10px;
`;

export const RowContainer = styled(View)`
  flex-direction: row;
`;

export const ColumnContainer = styled(View)`
  justify-content: space-around;
`;

export const TopContainer = styled(View)`
  justify-content: space-around;
`;

export const Title = styled(Text)`
  margin-top: 8px;
  font-size: 15px;
  color: #323232;
  font-weight: 400;
`;

export const StatusText = styled(Text)`
  margin-top: 4px;
  font-size: 12px;
  font-weight: 400;
  color: #151515;
  margin: 8px;
  margin-top: 12px;
  color: #22936a;
`;

export const AddressContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-top: 6px;
`;

export const AddressText = styled(Text)`
  font-size: 12px;
  font-weight: 300;
  color: #636363;
  margin-left: 2px;
`;

export const PriceText = styled(Text)`
  font-size: 12px;
  font-weight: 400;
  color: #636363;
`;

export const Logo = styled(Image)`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin-right: 10px;
`;

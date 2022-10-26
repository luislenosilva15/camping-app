import {View, Text} from 'react-native';
import React from 'react';
import {Props} from './types';

import * as S from './styles';
import Icon from '../../../assets/icons';

const CategoryItem: React.FC<Props> = ({item, category, handler}) => {
  return (
    <S.Container>
      <S.Button
        active={category === item.value}
        onPress={() => {
          handler(item.value);
        }}>
        <Icon iconName={item.value} width={32} height={32} />
      </S.Button>

      <S.Title>{item.label}</S.Title>
    </S.Container>
  );
};
export default CategoryItem;

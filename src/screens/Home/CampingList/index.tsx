import React from 'react';
import {campingList} from '../../../data/mock/campings';
import CampingItem from './CampingItem';
import * as S from './styles';

export default function CampingList() {
  return (
    <S.Container>
      <S.Title>Campins mais procurados</S.Title>
      <S.SubTitle>Foi encontrado 24 lugares</S.SubTitle>

      {campingList.map(item => {
        return <CampingItem camping={item} key={item.name} />;
      })}
    </S.Container>
  );
}

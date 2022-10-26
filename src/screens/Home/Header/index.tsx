import React from 'react';

import * as S from './styles';
import {iconUserProfile} from '../../../data/mock';

export default function Header() {
  return (
    <S.Container>
      <S.IconUser source={iconUserProfile} />
      <S.Title>Bom dia, Luis</S.Title>
      <S.SubTitle>Veja os melhores campins que separamos para você</S.SubTitle>
    </S.Container>
  );
}

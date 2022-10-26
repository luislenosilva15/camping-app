import React from 'react';
import * as S from './styles';
import IconSearch from '../../assets/icons/IconSearch.svg';

export default function Search() {
  return (
    <S.Container>
      <S.InputContainer>
        <IconSearch width="20" height="20" />
        <S.Input placeholder="Encontrar camping" />
      </S.InputContainer>
    </S.Container>
  );
}

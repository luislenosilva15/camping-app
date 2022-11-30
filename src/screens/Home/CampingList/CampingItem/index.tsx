import {View, Text} from 'react-native';
import React from 'react';
import {ServiceStatus} from '../../../../utils/CampingHelper';

import * as S from './styles';
import Icon from '../../../../assets/icons';

export default function CampingItem({camping}) {
  return (
    <S.Container>
      <S.RowContainer>
        <S.Logo source={{uri: camping.image}} />
        <S.ColumnContainer>
          <S.TopContainer>
            <S.Title>{camping.name}</S.Title>
            <S.AddressContainer>
              <Icon iconName={'map'} width={18} height={18} />
              <S.AddressText>
                {camping.city}, {camping.state}
              </S.AddressText>
            </S.AddressContainer>
          </S.TopContainer>

          <S.PriceText>{camping.price}</S.PriceText>
        </S.ColumnContainer>
      </S.RowContainer>

      <S.RowContainer>
        <S.StatusText>{ServiceStatus(camping.statusService)}</S.StatusText>
      </S.RowContainer>
    </S.Container>
  );
}

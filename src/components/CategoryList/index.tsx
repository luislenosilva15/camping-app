import React from 'react';
import {categories} from './data';

import * as S from './styles';
import CategoryItem from './CategoryItem';
import {Props} from './types';

const CategoryList: React.FC<Props> = ({category, handler}) => {
  return (
    <S.Container>
      <S.ContainerList horizontal={true}>
        {categories.map(item => {
          return (
            <CategoryItem
              item={item}
              key={item.label}
              category={category}
              handler={handler}
            />
          );
        })}
      </S.ContainerList>
    </S.Container>
  );
};

export default CategoryList;

import React, {useState} from 'react';
import CategoryList from '../../components/CategoryList';
import Search from '../../components/Search';
import CampingList from './CampingList';

import Header from './Header';
import * as S from './styles';

const Home = () => {
  const [category, setCategory] = useState('popular');

  const handleChangeCategory = (value: string): void => {
    setCategory(value);
  };

  return (
    <S.Container>
      <Header />
      <Search />
      <CategoryList category={category} handler={handleChangeCategory} />
      <CampingList />
    </S.Container>
  );
};

export default Home;

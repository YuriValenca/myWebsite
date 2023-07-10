import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../store';
import SearchHero from '../SearchHero';
import Header from '../Header';
import HeroList from '../HeroList';
import { fetchAllHeroes } from '../../store/actions/fetchAllHeroes';
import { AnyAction } from 'redux';
import { MarvelSearchContainer } from './style';

const MarvelSearch = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(fetchAllHeroes() as unknown as AnyAction);
  }, []);

  return (
    <MarvelSearchContainer>
      <Header
        page={page}
        setPage={setPage}
      />
      {
        page === 1 ? (
          <SearchHero
            asModal={false}
          />
        ) : (
          <HeroList />
        )
      }
    </MarvelSearchContainer>
  );
}

export default MarvelSearch;
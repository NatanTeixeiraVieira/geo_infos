import Head from 'next/head';
import Link from 'next/link';
import { useReducer } from 'react';

import Filter from '@/components/Filter';
import Search from '@/components/Search';
import reducer from '@/reducers/HomeReducer';
import { GetMultipleDatas } from '@/utils/FetchData';

import {
  Container,
  FilterAndSearch,
  Name,
  RequestError,
  State,
  States,
  Uf,
} from '@/styles/pages/Home';

export const getStaticProps = async () => {
  try {
    const [dataBrasilState, dataGeonames] = await GetMultipleDatas([
      'https://brasilapi.com.br/api/ibge/uf/v1',
      'http://www.geonames.org/childrenJSON?geonameId=3469034',
    ]);

    const data = dataBrasilState
      .sort((stateA, stateB) => (stateA.nome > stateB.nome ? 1 : -1))
      .map((state, i) => ({
        ...state,
        population: dataGeonames.geonames[i].population,
      }));
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
};

export default function Home({ data }) {
  const [state, dispatch] = useReducer(reducer, {
    brasilStates: data?.sort((stateA, stateB) =>
      stateA.nome > stateB.nome ? 1 : -1
    ),
  });

  const handleChangeOption = (e) => {
    dispatch({ type: e.target.value });
  };

  const handleSearch = (e) => {
    dispatch({ type: 'search', payload: { value: e.target.value, data } });
  };

  return (
    <>
      <Head>
        <title>Estados do Brasil | GeoInfos</title>
      </Head>
      {state.brasilStates ? (
        <Container>
          <FilterAndSearch>
            <Filter handleChangeOption={handleChangeOption}>
              <option>A - Z</option>
              <option>Z - A</option>
              <option>Regiões (A - Z)</option>
              <option>Regiões (Z - A)</option>
              <option>Menor população</option>
              <option>Maior população</option>
            </Filter>
            <Search handleSearch={handleSearch} />
          </FilterAndSearch>
          <States>
            {state.brasilStates.map((brasilState) => (
              <State key={brasilState.nome}>
                <Name>{brasilState.nome}</Name>
                <Uf>{brasilState.sigla}</Uf>
                <Link href={`/state/${brasilState.sigla.toLowerCase()}`}>
                  Detalhes
                </Link>
              </State>
            ))}
          </States>
        </Container>
      ) : (
        <RequestError>
          Desculpe, houve algum erro ao carregar as informações.
        </RequestError>
      )}
    </>
  );
}

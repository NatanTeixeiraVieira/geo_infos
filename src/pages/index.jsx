import Head from 'next/head';
import Link from 'next/link';
import { useReducer } from 'react';

import Filter from '@/components/Filter';
import NoMatches from '@/components/NoMatches';
import Search from '@/components/Search';
import reducer from '@/reducers/sortSearchReducer';
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
    datas: data?.sort((stateA, stateB) => (stateA.nome > stateB.nome ? 1 : -1)),
  });

  return (
    <>
      <Head>
        <title>Estados do Brasil | GeoInfos</title>
      </Head>
      {state.datas ? (
        <Container>
          <FilterAndSearch>
            <Filter dispatcher={dispatch}>
              <option>A - Z</option>
              <option>Z - A</option>
              <option>Regiões (A - Z)</option>
              <option>Regiões (Z - A)</option>
              <option>Menor população</option>
              <option>Maior população</option>
            </Filter>
            <Search dispatcher={dispatch} data={data} />
          </FilterAndSearch>
          {state.datas.length === 0 && (
            <NoMatches>
              Desculpe, não foi possível encontrar nenhum Estado correspondente
              a sua pesquisa
            </NoMatches>
          )}
          <States>
            {state.datas.map((brasilState) => (
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

import Head from 'next/head';
import { useReducer } from 'react';

import Filter from '@/components/Filter';
import Search from '@/components/Search';
import reducer from '@/reducers/StateReducer';
import { GetData, GetMultipleDatas } from '@/utils/FetchData';

import { RequestError } from '@/styles/pages/Home';
import {
  Cities,
  CitiesTitle,
  CityName,
  Container,
  FilterAndSearch,
  NameTitle,
  StateInfo,
} from '@/styles/pages/state/style';

export const getStaticPaths = async () => {
  const data = await GetData('https://brasilapi.com.br/api/ibge/uf/v1');

  const paths = data.map((path) => ({
    params: {
      stateUf: path.sigla.toLowerCase(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const uf = context.params.stateUf;

  try {
    const [dataBrasilState, dataGeonames, dataBrasilCities] =
      await GetMultipleDatas([
        `https://brasilapi.com.br/api/ibge/uf/v1/${uf}`,
        'http://www.geonames.org/childrenJSON?geonameId=3469034',
        `https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`,
      ]);

    return {
      props: {
        dataBrasilState,
        dataGeonames,
        dataBrasilCities,
      },
    };
  } catch (error) {
    return {
      props: {
        dataBrasilState: null,
        dataGeonames: null,
        dataBrasilCities: null,
      },
    };
  }
};

export default function State({
  dataBrasilState,
  dataGeonames,
  dataBrasilCities,
}) {
  const [state, dispatch] = useReducer(reducer, {
    dataBrasilCities: dataBrasilCities.sort((stateA, stateB) =>
      stateA.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '') >
      stateB.nome.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        ? 1
        : -1
    ),
  });

  const handleChangeOption = (e) => {
    dispatch({ type: e.target.value });
  };
  const handleSearch = (e) => {
    dispatch({
      type: 'search',
      payload: { value: e.target.value, dataBrasilCities },
    });
  };

  return (
    <>
      <Head>
        <title>Informações sobre os Estados brasileiros | GeoInfos</title>
      </Head>
      {dataBrasilState && dataGeonames && dataBrasilCities ? (
        <Container>
          <FilterAndSearch>
            <Filter handleChangeOption={handleChangeOption}>
              <option>A - Z</option>
              <option>Z - A</option>
            </Filter>
            <Search handleSearch={handleSearch} />
          </FilterAndSearch>
          <NameTitle>{dataBrasilState.nome}</NameTitle>
          <StateInfo>
            <p>Sigla: {dataBrasilState.sigla}</p>
            <p>Região: {dataBrasilState.regiao.nome}</p>
            <p>Sigla da região: {dataBrasilState.regiao.sigla}</p>
            <p>
              População:{' '}
              {dataGeonames.geonames
                .find(
                  (brasilState) =>
                    brasilState.name === dataBrasilState.nome ||
                    (brasilState.name === 'Federal District' &&
                      dataBrasilState.nome === 'Distrito Federal')
                )
                .population.toLocaleString('pt-BR')}{' '}
              habitantes
            </p>
            <p>Número total de municípios: {dataBrasilCities.length} </p>
          </StateInfo>
          {state.dataBrasilCities.length > 0 && (
            <section>
              <CitiesTitle>Municípios</CitiesTitle>
              <Cities>
                {state.dataBrasilCities.map((city) => (
                  <CityName key={city.nome}>{city.nome}</CityName>
                ))}
              </Cities>
            </section>
          )}
        </Container>
      ) : (
        <RequestError>
          Desculpe, houve algum erro ao carregar as informações.
        </RequestError>
      )}
    </>
  );
}

import Head from 'next/head';
import { useReducer } from 'react';

import Filter from '@/components/Filter';
import NoMatches from '@/components/NoMatches';
import RequestError from '@/components/RequestError';
import Search from '@/components/Search';
import StateInfo from '@/components/StateInfo';
import reducer from '@/reducers/sortSearchReducer';
import { GetData, GetMultipleDatas } from '@/utils/FetchData';
import RemoveAccents from '@/utils/RemoveAccents';

import {
  Cities,
  CitiesTitle,
  CityName,
  Container,
  FilterAndSearch,
  NameTitle,
  NoCities,
} from '@/styles/pages/state/style';

export const getStaticPaths = async () => {
  try {
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
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
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
    datas: dataBrasilCities?.sort((stateA, stateB) =>
      RemoveAccents(stateA.nome) > RemoveAccents(stateB.nome) ? 1 : -1
    ),
  });

  return (
    <>
      <Head>
        <title>Informações sobre os Estados brasileiros | GeoInfos</title>
      </Head>
      {dataBrasilState && dataGeonames && dataBrasilCities ? (
        <Container>
          <NameTitle>{dataBrasilState.nome}</NameTitle>
          <StateInfo
            dataBrasilState={dataBrasilState}
            dataGeonames={dataGeonames}
            state={state}
          />
          <section>
            <CitiesTitle>Municípios</CitiesTitle>
            <FilterAndSearch>
              <Filter dispatcher={dispatch}>
                <option>A - Z</option>
                <option>Z - A</option>
              </Filter>
              <Search dispatcher={dispatch} data={dataBrasilCities} />
            </FilterAndSearch>
            {dataBrasilState.sigla.toLowerCase() === 'df' && (
              <NoCities>Não há municípios disponíveis</NoCities>
            )}
            {state.datas.length === 0 &&
              dataBrasilState.sigla.toLowerCase() !== 'df' && (
                <NoMatches>
                  Desculpe, não foi possível encontrar nenhuma cidade
                  correspondente a sua pesquisa
                </NoMatches>
              )}
            <Cities>
              {state.datas.map((city) => (
                <CityName key={city.nome}>{city.nome}</CityName>
              ))}
            </Cities>
          </section>
        </Container>
      ) : (
        <RequestError />
      )}
    </>
  );
}

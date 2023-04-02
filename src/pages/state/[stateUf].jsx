import Head from 'next/head';

import { GetData, GetMultipleDatas } from '@/utils/FetchData';

import { RequestError } from '@/styles/pages/Home';
import {
  Cities,
  CitiesTitle,
  CityName,
  Container,
  NameTitle,
  StateCities,
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
  return (
    <>
      <Head>
        <title>Informações sobre os Estados brasileiros | GeoInfos</title>
      </Head>
      {dataBrasilState && dataGeonames && dataBrasilCities ? (
        <Container>
          <NameTitle>{dataBrasilState.nome}</NameTitle>
          <StateInfo>
            <p>Sigla: {dataBrasilState.sigla}</p>
            <p>Região: {dataBrasilState.regiao.nome}</p>
            <p>Sigla da região: {dataBrasilState.regiao.sigla}</p>
            <p>
              População:{' '}
              {dataGeonames.geonames
                .find(
                  (state) =>
                    state.name === dataBrasilState.nome ||
                    (state.name === 'Federal District' &&
                      dataBrasilState.nome === 'Distrito Federal')
                )
                .population.toLocaleString('pt-BR')}{' '}
              habitantes
            </p>
            <p>Número total de municípios: {dataBrasilCities.length} </p>
          </StateInfo>
          {dataBrasilCities.length > 0 && (
            <StateCities>
              <CitiesTitle>Municípios</CitiesTitle>
              <Cities>
                {dataBrasilCities.map((city) => (
                  <CityName key={city.nome}>{city.nome}</CityName>
                ))}
              </Cities>
            </StateCities>
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

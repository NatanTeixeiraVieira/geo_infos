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
  const res = await fetch('https://brasilapi.com.br/api/ibge/uf/v1');
  const data = await res.json();

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

  const resBrasilStates = await fetch(
    `https://brasilapi.com.br/api/ibge/uf/v1/${uf}`
  );
  const dataBrasilState = await resBrasilStates.json();

  const resGeonames = await fetch(
    'http://www.geonames.org/childrenJSON?geonameId=3469034'
  );
  const dataGeonames = await resGeonames.json();

  const resBrasilApiCities = await fetch(
    `https://brasilapi.com.br/api/ibge/municipios/v1/${uf}`
  );
  const dataBrasilCities = await resBrasilApiCities.json();

  return {
    props: {
      dataBrasilState,
      dataGeonames,
      dataBrasilCities,
    },
  };
};

export default function State({
  dataBrasilState,
  dataGeonames,
  dataBrasilCities,
}) {
  return (
    <Container>
      <NameTitle>{dataBrasilState.nome}</NameTitle>
      <StateInfo>
        <p>Sigla: {dataBrasilState.sigla}</p>
        <p>Região: {dataBrasilState.regiao.nome}</p>
        <p>Sigla da região: {dataBrasilState.regiao.sigla}</p>
        <p>
          População:{' '}
          {dataGeonames.geonames
            .find((state) => state.name === dataBrasilState.nome)
            .population.toLocaleString('pt-BR')}{' '}
          habitantes
        </p>
        <p>Número total de menicípios: {dataBrasilCities.length} </p>
      </StateInfo>
      <StateCities>
        <CitiesTitle>Municípios</CitiesTitle>
        <Cities>
          {dataBrasilCities.map((city) => (
            <CityName key={city.nome}>{city.nome}</CityName>
          ))}
        </Cities>
      </StateCities>
    </Container>
  );
}

import Wrapper from '@/styles/components/StateInfo';

export default function StateInfo({ dataBrasilState, dataGeonames, state }) {
  return (
    <Wrapper>
      <p>Sigla: {dataBrasilState.sigla}</p>
      <p>Região: {dataBrasilState.regiao.nome}</p>
      <p>Sigla da região: {dataBrasilState.regiao.sigla}</p>
      <p>
        População:{' '}
        {dataGeonames.geonames
          ?.find(
            (brasilState) =>
              brasilState.name === dataBrasilState?.nome ||
              (brasilState.name === 'Federal District' &&
                dataBrasilState.nome === 'Distrito Federal')
          )
          .population.toLocaleString('pt-BR')}{' '}
        habitantes
      </p>
      <p>Número total de municípios: {state.datas.length} </p>
    </Wrapper>
  );
}

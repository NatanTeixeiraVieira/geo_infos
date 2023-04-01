import Head from 'next/head';
import Link from 'next/link';

import { GetData } from '@/utils/FetchData';

import { Container, Name, RequestError, State, Uf } from '@/styles/pages/Home';

export const getStaticProps = async () => {
  try {
    const data = await GetData('https://brasilapi.com.br/api/ibge/uf/v1');

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
  return (
    <>
      <Head>
        <title>Estados do Brasil | GeoInfos</title>
      </Head>
      {data ? (
        <Container>
          {data
            .sort((stateA, stateB) => (stateA.nome > stateB.nome ? 1 : -1))
            .map((state) => (
              <State key={state.nome}>
                <Name>{state.nome}</Name>
                <Uf>{state.sigla}</Uf>
                <Link href={`/state/${state.sigla.toLowerCase()}`}>
                  Detalhes
                </Link>
              </State>
            ))}
        </Container>
      ) : (
        <RequestError>
          Desculpe, houve algum erro ao carregar as informações.
        </RequestError>
      )}
    </>
  );
}

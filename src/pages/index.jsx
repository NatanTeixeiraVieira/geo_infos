import Link from 'next/link';

import { Container, Name, RequestError, State, Uf } from '@/styles/pages/Home';

export const getStaticProps = async () => {
  try {
    const request = await fetch('https://brasilapi.com.br/api/ibge/uf/v1');
    const data = await request.json();

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
  return data ? (
    <Container>
      {data
        .sort((stateA, stateB) => (stateA.nome > stateB.nome ? 1 : -1))
        .map((state) => (
          <State key={state.nome}>
            <Name>{state.nome}</Name>
            <Uf>{state.sigla}</Uf>
            <Link href={`/state/${state.sigla.toLowerCase()}`}>Detalhes</Link>
          </State>
        ))}
    </Container>
  ) : (
    <RequestError>Erro ao carregar</RequestError>
  );
}

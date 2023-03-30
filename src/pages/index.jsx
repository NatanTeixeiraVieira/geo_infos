import Link from 'next/link';

import { Container, Name, State, Uf } from '@/styles/pages/Home';

export const getStaticProps = async () => {
  const request = await fetch('https://brasilapi.com.br/api/ibge/uf/v1');
  const data = await request.json();

  return {
    props: {
      data,
    },
  };
};
export default function Home({ data }) {
  console.log(data);
  return (
    <Container>
      {data.map((state) => (
        <State key={state.nome}>
          <Name>{state.nome}</Name>
          <Uf>{state.sigla}</Uf>
          <Link href="/">Detalhes</Link>
        </State>
      ))}
    </Container>
  );
}

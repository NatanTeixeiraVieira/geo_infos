import Link from 'next/link';

import { Name, BrasilState, Uf, Wrapper } from '@/styles/components/States';

export default function States({ state }) {
  return (
    <Wrapper>
      {state.datas.map((brasilState) => (
        <BrasilState key={brasilState.nome}>
          <Name>{brasilState.nome}</Name>
          <Uf>{brasilState.sigla}</Uf>
          <Link href={`/state/${brasilState.sigla.toLowerCase()}`}>
            Detalhes
          </Link>
        </BrasilState>
      ))}
    </Wrapper>
  );
}

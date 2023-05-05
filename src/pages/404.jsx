import Link from 'next/link';

import {
  Container,
  ErrorDescription,
  ErrorInfos,
  ErrorTitle,
} from '@/styles/pages/404';

export default function NotFound() {
  return (
    <Container>
      <ErrorInfos>
        <ErrorTitle>Erro 404</ErrorTitle>
        <ErrorDescription>Página não encontrada</ErrorDescription>
        <Link href="/">Página inicial</Link>
      </ErrorInfos>
    </Container>
  );
}

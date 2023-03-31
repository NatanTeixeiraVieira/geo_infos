import Image from 'next/image';
import Link from 'next/link';

import { HeaderContainer } from '@/styles/components/Header';

export default function Header({ font }) {
  return (
    <HeaderContainer className={font} role="heading">
      <Link href="/" data-testid="logo">
        <Image
          src="/images/logo.png"
          width={64}
          height={64}
          alt="Logo do site"
        />
      </Link>
    </HeaderContainer>
  );
}

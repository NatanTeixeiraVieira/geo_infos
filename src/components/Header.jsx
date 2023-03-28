import Image from 'next/image';

import { HeaderContainer, Logo } from '@/styles/components/Header';

export default function Header({ font }) {
  return (
    <HeaderContainer className={font}>
      <Logo>
        <Image
          src="/images/logo.png"
          width={64}
          height={64}
          alt="Logo do site"
        />
      </Logo>
    </HeaderContainer>
  );
}

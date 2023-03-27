import Image from 'next/image';

import { HeaderContainer, Logo } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
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

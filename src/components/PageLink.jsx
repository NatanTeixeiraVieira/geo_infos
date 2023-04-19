import Link from 'next/link';

import Li from '@/styles/components/PageLink';

export default function PageLink({ page, href }) {
  return (
    <Li>
      <Link href={href}>{page}</Link>
    </Li>
  );
}

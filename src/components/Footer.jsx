import { Copyright, FooterContainer } from '@/styles/components/Footer';

export default function Footer({ font }) {
  return (
    <FooterContainer className={font}>
      <Copyright>
        <span>GeoInfos</span> &copy; 2023
      </Copyright>
    </FooterContainer>
  );
}

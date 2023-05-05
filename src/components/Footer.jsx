import { Copyright, FooterContainer } from '@/styles/components/Footer';

export default function Footer({ font }) {
  return (
    <FooterContainer className={font} data-testid="footer_container">
      <Copyright data-testid="copyright_p">
        <span>GeoInfos</span> &copy; 2023
      </Copyright>
    </FooterContainer>
  );
}

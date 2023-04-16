import SearchOffIcon from '@mui/icons-material/SearchOff';

import {
  Container,
  SearchIcon,
  TextSearchNoMatch,
} from '@/styles/components/NoMatches';

export default function NoMatches({ children }) {
  return (
    <Container>
      <SearchIcon>
        <SearchOffIcon fontSize="" />
      </SearchIcon>
      <TextSearchNoMatch>{children}</TextSearchNoMatch>
    </Container>
  );
}

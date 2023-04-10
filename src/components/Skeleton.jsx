import {
  AllContent,
  Container,
  Content,
  Filter,
  FilterAndSearch,
  List,
  Search,
  StateInfo,
  StatesInfo,
} from '@/styles/components/Skeleton';

export default function Skeleton({ url }) {
  const isHomePage = url === '/';
  return (
    <Container>
      <AllContent>
        <FilterAndSearch>
          <Filter />
          <Search />
        </FilterAndSearch>
        {!isHomePage && (
          <StatesInfo>
            <StateInfo isTitle />
            {[...Array(5)].map((_, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <StateInfo key={index} />
            ))}
            <StateInfo isTitle />
          </StatesInfo>
        )}
        <List spacings={isHomePage ? 2.6 : 5}>
          {[...Array(isHomePage ? 26 : 100)].map((_, index) => (
            <Content
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              height={isHomePage ? 26 : 12}
              width={isHomePage ? 23 : 30}
            />
          ))}
        </List>
      </AllContent>
    </Container>
  );
}

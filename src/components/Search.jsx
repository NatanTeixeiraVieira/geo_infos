import { SearchContainer, SearchInput } from '@/styles/components/Search';

export default function Search({ handleSearch }) {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Pesquisar Estado"
        onChange={handleSearch}
      />
    </SearchContainer>
  );
}

import { useEffect, useState } from 'react';

import { SearchContainer, SearchInput } from '@/styles/components/Search';

export default function Search({ dispatcher, data }) {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    dispatcher({ type: 'search', payload: { value: searchValue, data } });
  }, [searchValue, data, dispatcher]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Pesquisar Estado"
        onChange={handleSearch}
        value={searchValue}
      />
    </SearchContainer>
  );
}

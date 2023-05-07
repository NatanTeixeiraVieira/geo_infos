import { useEffect, useRef, useState } from 'react';

import { useTheme } from 'styled-components';

import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

import {
  SearchContainer,
  SearchInput,
  XIcon,
} from '@/styles/components/Search';

export default function Search({ dispatcher, data }) {
  const [searchValue, setSearchValue] = useState('');
  const inputSearchRef = useRef();
  const theme = useTheme();

  useEffect(() => {
    dispatcher({ type: 'search', payload: { value: searchValue, data } });
  }, [searchValue, data, dispatcher]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const handleDelete = () => {
    setSearchValue('');
    inputSearchRef.current.focus();
  };

  const handleClickSearchIcon = () => {
    inputSearchRef.current.focus();
  };

  return (
    <SearchContainer>
      <SearchIcon
        style={{
          color: theme.colors.textPrimary,
          opacity: theme.title === 'light' ? 0.7 : 1,
        }}
        onClick={handleClickSearchIcon}
      />
      <SearchInput
        type="text"
        placeholder="Pesquisar"
        onChange={handleSearch}
        value={searchValue}
        ref={inputSearchRef}
      />
      <XIcon onClick={handleDelete}>
        {searchValue && <ClearIcon fontSize="small" />}
      </XIcon>
    </SearchContainer>
  );
}

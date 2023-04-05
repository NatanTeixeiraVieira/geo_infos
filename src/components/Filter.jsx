import {
  FilterContainer,
  LabelFilter,
  SelectContainer,
  SelectFilter,
} from '@/styles/components/Filter';

export default function Filter({ children, handleChangeOption }) {
  return (
    <FilterContainer>
      <LabelFilter>Ordenar: </LabelFilter>
      <SelectContainer>
        <SelectFilter onChange={handleChangeOption}>{children}</SelectFilter>
      </SelectContainer>
    </FilterContainer>
  );
}

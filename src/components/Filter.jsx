import {
  FilterContainer,
  LabelFilter,
  SelectContainer,
  SelectFilter,
} from '@/styles/components/Filter';

export default function Filter({ children, dispatcher }) {
  const handleChangeOption = (e) => {
    dispatcher({ type: e.target.value });
  };

  return (
    <FilterContainer>
      <LabelFilter>Ordenar: </LabelFilter>
      <SelectContainer>
        <SelectFilter onChange={handleChangeOption}>{children}</SelectFilter>
      </SelectContainer>
    </FilterContainer>
  );
}

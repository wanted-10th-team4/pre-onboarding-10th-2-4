import React from 'react';
import Recommendation from '@components/Recommendation';
import Button from './Button';
import Input from './Input';
import { SearchInputDiv, SearchInputDivWrapper } from './styles';

function SearchInput() {
  return (
    <SearchInputDivWrapper>
      <SearchInputDiv>
        <Input />
        <Button />
        <Recommendation />
      </SearchInputDiv>
    </SearchInputDivWrapper>
  );
}

export default SearchInput;

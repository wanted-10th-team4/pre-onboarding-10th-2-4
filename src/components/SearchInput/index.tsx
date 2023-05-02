import React from 'react';
import Button from './Button';
import Input from './Input';
import { SearchInputDiv, SearchInputDivWrapper } from './styles';

function SearchInput() {
  return (
    <SearchInputDivWrapper>
      <SearchInputDiv>
        <Input />
        <Button />
      </SearchInputDiv>
    </SearchInputDivWrapper>
  );
}

export default SearchInput;

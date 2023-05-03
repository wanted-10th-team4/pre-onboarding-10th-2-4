import React from 'react';
import ButtonSearchIcon from './ButtonSearchIcon';
import { SearchButton, LabelDiv, InputSearchIconDiv } from './styles';

function Button() {
  return (
    <SearchButton>
      <LabelDiv>검색버튼</LabelDiv>
      <InputSearchIconDiv>
        <ButtonSearchIcon />
      </InputSearchIconDiv>
    </SearchButton>
  );
}

export default Button;

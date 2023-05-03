import React from 'react';
import ButtonSearchIcon from './ButtonSearchIcon';
import { SearchButton, LabelDiv, InputSearchIconDiv } from './styles';

function Button() {
  const onClickButton = () => {
    alert('구현 대상이 아닙니다');
  };
  return (
    <SearchButton onClick={onClickButton}>
      <LabelDiv>검색버튼</LabelDiv>
      <InputSearchIconDiv>
        <ButtonSearchIcon />
      </InputSearchIconDiv>
    </SearchButton>
  );
}

export default Button;

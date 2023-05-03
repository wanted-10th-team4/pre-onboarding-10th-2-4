import getSearchResults from '@api/search';
import React from 'react';
import ButtonSearchIcon from './ButtonSearchIcon';
import { SearchButton, LabelDiv, InputSearchIconDiv } from './styles';

function Button() {
  // TODO: API 테스트용으로 만든 것으로 차후에 삭제해야함
  const onClickButton = async () => {
    try {
      const data = await getSearchResults({ name: '갑' });
      console.log(data);
    } catch (error) {
      console.log('err: ', error);
    }
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

import React from 'react';
import styled from 'styled-components';

const SearchButton = styled.button`
  display: flex;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  font-weight: var(--font-weight-medium);
  border: 0;
  cursor: pointer;
  background-color: #007be9;
  color: var(--White);
  align-items: center;
  justify-content: center;
`;

const LabelDiv = styled.div`
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  text-indent: -9999px;
`;

const InputSearchIconDiv = styled.div`
  width: 21px;
  height: 21px;
`;

function Button() {
  return (
    <SearchButton>
      <LabelDiv>검색버튼</LabelDiv>
      <InputSearchIconDiv>
        <svg viewBox="0 0 16 16" fill="currentColor" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z" />
        </svg>
      </InputSearchIconDiv>
    </SearchButton>
  );
}

export default Button;

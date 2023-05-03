import React from 'react';
import LabelForInput from '@components/common/LabelForInput';
import SearchIcon from '@components/common/SearchIcon';
// import { SearchInputInputProps } from '@type/props';
import InputTextCancelIcon from './InputTextCancelIcon';
import { InputDivWrapper, InputDiv, InputWrapper, InputTextDivWrapper, InputTextIconDiv, InputTextCancelIconSpan, SearchInput } from './styles';

const INPUT_ID = 'main_search_input';

function Input() {
  return (
    <InputDivWrapper>
      <InputDiv>
        <LabelForInput labelFor={INPUT_ID} labelText="질환명을 검색해 주세요" />
        <InputWrapper>
          <InputTextDivWrapper>
            <InputTextIconDiv>
              <SearchIcon />
            </InputTextIconDiv>
            <div>질환명을 입력해 주세요.</div>
          </InputTextDivWrapper>
          <SearchInput id={INPUT_ID} type="search" spellCheck="false" />
          <InputTextCancelIconSpan>
            <InputTextCancelIcon />
          </InputTextCancelIconSpan>
        </InputWrapper>
      </InputDiv>
    </InputDivWrapper>
  );
}

export default Input;

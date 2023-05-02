import React from 'react';
import LabelForInput from '@components/common/LabelForInput';
import styled from 'styled-components';
import InputTextIcon from './InputTextIcon';
import InputTextCancelIcon from './InputTextCancelIcon';

const InputDivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  font-size: 1.125rem;
  letter-spacing: -0.018em;
  line-height: 1.6;
  padding: 20px 10px 20px 24px;
  font-weight: var(--font-weight-regular);
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputTextDivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #a7afb7;
  position: absolute;
  pointer-events: none;
`;

const InputTextIconDiv = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 12px;
`;

const SearchInput = styled.input`
  caret-color: rgb(25, 118, 210);
  padding-right: 25px;
  width: 100%;
  border: 0;
  background-color: transparent;
  min-width: 0;
  flex: 1;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  &:focus {
    outline: 0;
  }
`;

const InputTextCancelIconSpan = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: rgb(255, 255, 255);
  background-color: rgb(167, 175, 183);
`;

const INPUT_ID = 'main_search_input';

function Input() {
  return (
    <InputDivWrapper>
      <InputDiv>
        <LabelForInput labelFor={INPUT_ID} labelText="질환명을 검색해 주세요" />
        <InputWrapper>
          <InputTextDivWrapper>
            <InputTextIconDiv>
              <InputTextIcon />
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

import React, { useRef } from 'react';
import LabelForInput from '@components/common/LabelForInput';
import SearchIcon from '@components/common/SearchIcon';
import { SearchInputInputProps } from '@type/props';
import InputTextCancelIcon from './InputTextCancelIcon';
import {
  InputDivWrapper,
  InputDiv,
  InputWrapper,
  InputTextDivWrapper,
  InputTextIconDiv,
  InputTextCancelIconSpan,
  SearchInput,
} from './styles';

const INPUT_ID = 'main_search_input';

function Input({ inputText, setInputText, isInputTextFocus, setIsInputTextFocus }: SearchInputInputProps) {
  const inputTextRef = useRef<HTMLInputElement>(null);
  const onChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  const onBlurInputText = () => {
    setIsInputTextFocus(false);
  };
  const onFocusInputText = () => {
    setIsInputTextFocus(true);
  };
  const onClickCancel = () => {
    setInputText('');
  };

  return (
    <InputDivWrapper>
      <InputDiv>
        <LabelForInput labelFor={INPUT_ID} labelText="질환명을 검색해 주세요" />
        <InputWrapper>
          {!isInputTextFocus && inputText.length === 0 && (
            <InputTextDivWrapper>
              <InputTextIconDiv>
                <SearchIcon />
              </InputTextIconDiv>
              <div>질환명을 입력해 주세요.</div>
            </InputTextDivWrapper>
          )}
          <SearchInput
            id={INPUT_ID}
            type="search"
            spellCheck="false"
            ref={inputTextRef}
            value={inputText}
            onChange={onChangeInputText}
            onBlur={onBlurInputText}
            onFocus={onFocusInputText}
            autoComplete="off"
          />
          {isInputTextFocus && (
            <InputTextCancelIconSpan onMouseDown={onClickCancel}>
              <InputTextCancelIcon />
            </InputTextCancelIconSpan>
          )}
        </InputWrapper>
      </InputDiv>
    </InputDivWrapper>
  );
}

export default Input;

import React from 'react';
import LabelForInput from '@components/common/LabelForInput';
import SearchIcon from '@components/common/SearchIcon';
import { SearchInputInputProps } from '@type/props';
import { ARROW_DOWN, ARROW_UP } from '@utils/constant';
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

function Input({
  inputText,
  setInputText,
  isInputTextFocus,
  setIsInputTextFocus,
  setSelectedIndex,
  maxIndex,
}: SearchInputInputProps) {
  const getUpIndex = (prevIndex: number) => {
    if (prevIndex <= 0) return maxIndex;
    return prevIndex - 1;
  };

  const getDownIndex = (prevIndex: number) => {
    if (prevIndex >= maxIndex) return 0;
    return prevIndex + 1;
  };

  const onKeyDownItem = (key: string) => {
    if (key === ARROW_UP) setSelectedIndex(prevIndex => getUpIndex(prevIndex));
    if (key === ARROW_DOWN) setSelectedIndex(prevIndex => getDownIndex(prevIndex));
  };

  const onKeyDownInputText = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if ([ARROW_UP, ARROW_DOWN].includes(e.key)) {
      e.preventDefault();
      onKeyDownItem(e.key);
    }
  };

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
            value={inputText}
            onChange={onChangeInputText}
            onKeyDown={onKeyDownInputText}
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

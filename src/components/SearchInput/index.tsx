import React, { useState } from 'react';
import Recommendation from '@components/Recommendation';
import Button from './Button';
import Input from './Input';
import { SearchInputDiv, SearchInputDivWrapper } from './styles';

function SearchInput() {
  const [inputText, setInputText] = useState<string>('');
  const [isInputTextFocus, setIsInputTextFocus] = useState<boolean>(false);

  return (
    <SearchInputDivWrapper>
      <SearchInputDiv>
        <Input
          inputText={inputText}
          setInputText={setInputText}
          isInputTextFocus={isInputTextFocus}
          setIsInputTextFocus={setIsInputTextFocus}
        />
        <Button />
        {inputText.length > 0 && isInputTextFocus && <Recommendation />}
      </SearchInputDiv>
    </SearchInputDivWrapper>
  );
}

export default SearchInput;

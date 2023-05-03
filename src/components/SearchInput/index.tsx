import React, { useState, useEffect } from 'react';
import Recommendation from '@components/Recommendation';
import useDebounce from '@hooks/useDebounce';
import getSearchResults from '@api/search';
import DEBOUNCE_LIMIT_TIME from '@utils/constant';
import Button from './Button';
import Input from './Input';
import { SearchInputDiv, SearchInputDivWrapper } from './styles';

function SearchInput() {
  const [inputText, setInputText] = useState<string>('');
  const [isInputTextFocus, setIsInputTextFocus] = useState<boolean>(false);
  const getDebounceResult = useDebounce(async text => {
    try {
      console.info(text);
      const data = await getSearchResults({ name: text });
      // TODO: Recommendation으로 뿌려는 로직 작성
      console.log(data);
    } catch (error) {
      console.error('err: ', error);
    }
  }, DEBOUNCE_LIMIT_TIME);

  useEffect(() => {
    if (inputText.length > 0) getDebounceResult(inputText);
  }, [inputText]);

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

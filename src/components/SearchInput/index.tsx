import React, { useState, useEffect } from 'react';
import Recommendation from '@components/Recommendation';
import useDebounce from '@hooks/useDebounce';
import getSearchResults from '@api/search';
import { DEBOUNCE_LIMIT_TIME } from '@utils/constant';
import { GetSearchResultsResponse } from '@type/data';
import Button from './Button';
import Input from './Input';
import { SearchInputDiv, SearchInputDivWrapper } from './styles';

function SearchInput() {
  const [inputText, setInputText] = useState<string>('');
  const [isInputTextFocus, setIsInputTextFocus] = useState<boolean>(false);
  const [recommendationList, setRecommendationList] = useState<GetSearchResultsResponse>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const getDebounceResult = useDebounce(async text => {
    try {
      const data = await getSearchResults({ name: text });
      setRecommendationList(data);
    } catch (error) {
      console.error('err: ', error);
    }
  }, DEBOUNCE_LIMIT_TIME);

  useEffect(() => {
    setSelectedIndex(-1);
    if (inputText.length === 0) setRecommendationList([]);
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
          setSelectedIndex={setSelectedIndex}
          maxIndex={recommendationList.length - 1}
        />
        <Button />
        {inputText.length > 0 && isInputTextFocus && (
          <Recommendation
            recommendationList={recommendationList}
            inputText={inputText}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        )}
      </SearchInputDiv>
    </SearchInputDivWrapper>
  );
}

export default SearchInput;

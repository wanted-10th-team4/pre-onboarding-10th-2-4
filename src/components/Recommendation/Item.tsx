import React, { useState, useEffect } from 'react';
import SearchIcon from '@components/common/SearchIcon';
import { RecommendationItemProps } from '@type/props';
import { RecommendationItem, SearchIconDiv, MarginDiv, SearchHighlightDiv } from './styles';

function Item({ recommendationItem, inputText }: RecommendationItemProps) {
  const [matchLength, setMatchLength] = useState<number>(0);

  useEffect(() => {
    const unDuplicateLength = recommendationItem.name.replace(inputText, '').length;
    setMatchLength(recommendationItem.name.length - unDuplicateLength);
  }, [inputText]);

  return (
    <RecommendationItem>
      <SearchIconDiv>
        <SearchIcon />
      </SearchIconDiv>
      <MarginDiv />
      <SearchHighlightDiv>{recommendationItem.name.slice(0, matchLength)}</SearchHighlightDiv>
      {recommendationItem.name.slice(matchLength)}
    </RecommendationItem>
  );
}

export default Item;

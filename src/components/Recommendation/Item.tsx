import React from 'react';
import SearchIcon from '@components/common/SearchIcon';
import { RecommendationItem, SearchIconDiv, MarginDiv, SearchHighlightDiv } from './styles';

function Item() {
  return (
    <RecommendationItem>
      <SearchIconDiv>
        <SearchIcon />
      </SearchIconDiv>
      <MarginDiv />
      <SearchHighlightDiv>비</SearchHighlightDiv>강암
    </RecommendationItem>
  );
}

export default Item;

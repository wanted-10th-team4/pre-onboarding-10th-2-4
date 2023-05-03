import React from 'react';
import { RecommendationDivWrapper, RecommendationDiv } from './styles';
import Item from './Item';
import Title from './Title';

function Recommendation() {
  return (
    <RecommendationDivWrapper>
      <RecommendationDiv>
        <Title />
        <Item />
        <Item />
      </RecommendationDiv>
    </RecommendationDivWrapper>
  );
}

export default Recommendation;

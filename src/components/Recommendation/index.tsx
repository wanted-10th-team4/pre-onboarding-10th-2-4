import React from 'react';
import { RecommendationProps } from '@type/props';
import { RecommendationDivWrapper, RecommendationDiv } from './styles';
import Item from './Item';
import Title from './Title';
import NoItem from './NoItem';

function Recommendation({ recommendationList, inputText }: RecommendationProps) {
  return (
    <RecommendationDivWrapper>
      <RecommendationDiv>
        <Title />
        {recommendationList.length > 0 ? (
          recommendationList.map(recommendationItem => (
            <Item key={recommendationItem.id} recommendationItem={recommendationItem} inputText={inputText} />
          ))
        ) : (
          <NoItem />
        )}
      </RecommendationDiv>
    </RecommendationDivWrapper>
  );
}

export default Recommendation;

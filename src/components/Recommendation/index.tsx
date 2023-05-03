import React from 'react';
import { RecommendationProps } from '@type/props';
import { RecommendationDivWrapper, RecommendationDiv } from './styles';
import Item from './Item';
import Title from './Title';
import NoItem from './NoItem';

function Recommendation({ recommendationList, inputText, selectedIndex, setSelectedIndex }: RecommendationProps) {
  return (
    <RecommendationDivWrapper>
      <RecommendationDiv>
        <Title />
        {recommendationList.length > 0 ? (
          recommendationList.map((recommendationItem, index) => (
            <Item
              key={recommendationItem.id}
              isSelected={index === selectedIndex}
              index={index}
              recommendationItem={recommendationItem}
              inputText={inputText}
              setSelectedIndex={setSelectedIndex}
            />
          ))
        ) : (
          <NoItem />
        )}
      </RecommendationDiv>
    </RecommendationDivWrapper>
  );
}

export default Recommendation;

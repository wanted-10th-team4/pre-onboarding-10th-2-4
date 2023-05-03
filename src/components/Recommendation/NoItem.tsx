import React from 'react';
import { RecommendationItem } from './styles';

function NoItem() {
  return <RecommendationItem isSelected={false}>검색어 없음</RecommendationItem>;
}

export default NoItem;

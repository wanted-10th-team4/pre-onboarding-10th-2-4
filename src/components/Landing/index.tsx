import React from 'react';
import Recommendation from '@components/Recommendation';
import SearchInput from '@components/SearchInput';
import { LandingDivWrapper } from './styles';
import Text from './Text';

function index() {
  return (
    <LandingDivWrapper>
      <Text />
      <SearchInput />
      <Recommendation />
    </LandingDivWrapper>
  );
}

export default index;

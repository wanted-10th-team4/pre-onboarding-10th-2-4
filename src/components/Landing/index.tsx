import React from 'react';
import SearchInput from '@components/SearchInput';
import { LandingDivWrapper } from './styles';
import Text from './Text';

function index() {
  return (
    <LandingDivWrapper>
      <Text />
      <SearchInput />
    </LandingDivWrapper>
  );
}

export default index;

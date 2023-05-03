import React from 'react';
import SearchInput from '@components/SearchInput';
import { FirstIconDiv, LandingDivWrapper, SecondIconDiv, ThirdIconDiv } from './styles';
import Text from './Text';
import FirstIcon from './FirstIcon';
import SecondIcon from './SecondIcon';
import ThirdIcon from './ThirdIcon';

function index() {
  return (
    <LandingDivWrapper>
      <FirstIconDiv>
        <FirstIcon />
      </FirstIconDiv>
      <SecondIconDiv>
        <SecondIcon />
      </SecondIconDiv>
      <ThirdIconDiv>
        <ThirdIcon />
      </ThirdIconDiv>
      <Text />
      <SearchInput />
    </LandingDivWrapper>
  );
}

export default index;

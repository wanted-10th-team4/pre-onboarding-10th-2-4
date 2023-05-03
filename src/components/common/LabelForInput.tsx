import React from 'react';
import { LabelForInputProps } from '@type/props';
import styled from 'styled-components';

const LabelTextDiv = styled.div`
  opacity: 0;
  line-height: 7px;
`;

function LabelForInput({ labelFor, labelText }: LabelForInputProps) {
  return (
    <div>
      <label htmlFor={labelFor}>
        <LabelTextDiv>{labelText}</LabelTextDiv>
      </label>
    </div>
  );
}

export default LabelForInput;

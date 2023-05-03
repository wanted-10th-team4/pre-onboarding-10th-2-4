import styled from 'styled-components';

export const SearchInputDivWrapper = styled.div`
  display: flex;
  max-width: 490px;
  width: 100%;
`;

export const SearchInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 42px;
  border: 2px solid;
  border-color: var(--White);
  background-color: var(--White);
  font-size: 1rem;
  font-weight: var(--font-weight-regular);
  letter-spacing: -0.018em;
  line-height: 1.6;
  padding-right: 8px;
  width: 100%;
  position: relative;
`;

export const InputDivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  font-size: 1.125rem;
  letter-spacing: -0.018em;
  line-height: 1.6;
  padding: 20px 10px 20px 24px;
  font-weight: var(--font-weight-regular);
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputTextDivWrapper = styled.div`
  display: flex;
  flex-direction: row;
  color: #a7afb7;
  position: absolute;
  pointer-events: none;
`;

export const InputTextIconDiv = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 12px;
`;

export const SearchInput = styled.input`
  caret-color: rgb(25, 118, 210);
  padding-right: 25px;
  width: 100%;
  border: 0;
  background-color: transparent;
  min-width: 0;
  flex: 1;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  &:focus {
    outline: 0;
  }
`;

export const InputTextCancelIconSpan = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);
  right: 0px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: rgb(255, 255, 255);
  background-color: rgb(167, 175, 183);
`;

export const SearchButton = styled.button`
  display: flex;
  border-radius: 100%;
  width: 48px;
  height: 48px;
  font-weight: var(--font-weight-medium);
  border: 0;
  cursor: pointer;
  background-color: #007be9;
  color: var(--White);
  align-items: center;
  justify-content: center;
`;

export const LabelDiv = styled.div`
  overflow: hidden;
  position: absolute;
  width: 0;
  height: 0;
  line-height: 0;
  text-indent: -9999px;
`;

export const InputSearchIconDiv = styled.div`
  width: 21px;
  height: 21px;
`;

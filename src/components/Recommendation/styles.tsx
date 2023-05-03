import styled from 'styled-components';

export const RecommendationDivWrapper = styled.div`
  z-index: 1;
`;

export const RecommendationDiv = styled.div`
  border-radius: 20px;
  background-color: var(--White);
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0px;
  margin-top: 8px;
  padding-top: 24px;
  padding-bottom: 16px;
  box-shadow: rgba(30, 32, 37, 0.1) 0px 2px 10px;
`;

export const RecommendationTitle = styled.div`
  color: rgb(106, 115, 123);
  font-size: 13px;
  font-weight: var(--font-weight-regular);
  letter-spacing: -0.018em;
  line-height: 1.6;
  padding-left: 24px;
  padding-right: 24px;
`;

export const RecommendationItem = styled.div`
  word-break: break-all;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: flex;
  padding: 8px 24px;
  cursor: pointer;
`;

export const SearchIconDiv = styled.div`
  color: rgb(167, 175, 183);
  align-self: flex-start;
  min-width: 16px;
  height: 16px;
  margin-top: 3px;
`;

export const MarginDiv = styled.div`
  margin-right: 12px;
`;

export const SearchHighlightDiv = styled.div`
  font-weight: var(--font-weight-bold);
`;

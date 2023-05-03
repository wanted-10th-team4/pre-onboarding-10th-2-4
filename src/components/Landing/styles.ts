import styled from 'styled-components';

export const LandingDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1040px;
  align-items: center;

  line-height: 1.15;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 0 160px;
`;

export const LandingH2Wrapper = styled.div`
  margin-bottom: 40px;
  font-size: 2.125rem;
  font-weight: var(--font-weight-bold);
  letter-spacing: -0.018em;
  line-height: 1.6;
  text-align: center;
`;

export const FirstIconDiv = styled.div`
  line-height: 1.15;
  position: absolute;
  width: 148px;
  left: 0;
  top: 200px;
`;

export const SecondIconDiv = styled.div`
  line-height: 1.15;
  position: absolute;
  width: 130px;
  right: 124px;
  top: 280px;
`;

export const ThirdIconDiv = styled.div`
  line-height: 1.15;
  position: absolute;
  width: 116px;
  right: 20px;
  top: 188px;
`;

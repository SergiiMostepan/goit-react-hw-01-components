import styled from 'styled-components';

export const Wrapper = styled.ul`
  margin: 0 auto;
  width: 350px;
  margin-bottom: 20px;
  padding: 0;
  &:nth-child(n) {
    margin-bottom: 20px;
  }
  &:nth-last-child(1) {
    margin-bottom: 0px;
  }
`;

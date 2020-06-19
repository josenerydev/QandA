import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 30px auto;

  grid-template-areas:
  'Header'
  'Content';

  height: 100vh;
`;
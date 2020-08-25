import React from 'react';
import styled from 'styled-components';
import SurveyCreator from './Components/sjs/SurveyCreator';
import LayoutTest from './Pages/LayoutTest';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 0.35em;
  margin-left: 4.45em;
  margin-right: 2em;
  margin-bottom: 2em;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);    
  max-height: 30%;
`;
export const LayoutContainer = () => (
  <GridWrapper>            
        <LayoutTest/>    
  </GridWrapper>
)

const SurveyStyled = styled.div`
    .nested-wrapper {
        display: flex;
        overflow-y: auto;
        overflow-y: scroll;
    }
`